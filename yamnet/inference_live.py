# Copyright 2019 The TensorFlow Authors All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
# ==============================================================================

"""Inference demo for YAMNet."""
from __future__ import division, print_function

import argparse
import sys
import time

import numpy as np
import pyaudio as pyaudio
import resampy
import soundfile as sf
import tensorflow as tf

import params as yamnet_params
import yamnet as yamnet_model
from vggish_input import waveform_to_examples

# Variables
FORMAT = pyaudio.paInt16
CHANNELS = 1
RATE = 16000
CHUNK = RATE
MICROPHONES_DESCRIPTION = []
FPS = 60.0
###########################
# Checl Microphone
###########################
print("=====")
print("1 / 2: Checking Microphones... ")
print("=====")

import microphones
desc, mics, indices = microphones.list_microphones()
if (len(mics) == 0):
    print("Error: No microphone found.")
    exit()

#############
# Read Command Line Args
#############
MICROPHONE_INDEX = indices[0]
parser = argparse.ArgumentParser()
parser.add_argument("-m", "--mic", help="Select which microphone / input device to use")
args = parser.parse_args()
try:
    if args.mic:
        MICROPHONE_INDEX = int(args.mic)
        print("User selected mic: %d" % MICROPHONE_INDEX)
    else:
        mic_in = input("Select microphone [%d]: " % MICROPHONE_INDEX).strip()
        if (mic_in!=''):
            MICROPHONE_INDEX = int(mic_in)
except:
    print("Invalid microphone")
    exit()

# Find description that matches the mic index
mic_desc = ""
for k in range(len(indices)):
    i = indices[k]
    if (i==MICROPHONE_INDEX):
        mic_desc = mics[k]
print("Using mic: %s" % mic_desc)

params = yamnet_params.Params()
yamnet = yamnet_model.yamnet_frames_model(params)
yamnet.load_weights('yamnet.h5')
yamnet_classes = yamnet_model.class_names('yamnet_class_map.csv')


##############################
# Setup Audio Callback
##############################
def audio_samples(in_data, frame_count, time_info, status_flags):
    global graph
    np_wav = np.fromstring(in_data, dtype=np.int16) / 32768.0 # Convert to [-1.0, +1.0]
    x = waveform_to_examples(np_wav, RATE)
    predictions = []
    with graph.as_default():
        if x.shape[0] != 0:
            x = x.reshape(len(x), 96, 64, 1)
            pred = yamnet.predict(x)
            predictions.append(pred)

        for prediction in predictions:
            m = np.argmax(prediction[0])
            if (m < len(label)):
                p = label[m]
                print("Prediction: %s (%0.2f)" % (ubicoustics.to_human_labels[label[m]], prediction[0,m]))
                n_items = prediction.shape[1]
            else:
                print("KeyError: %s" % m)

    return (in_data, pyaudio.paContinue)


if __name__ == '__main__':
    ##############################
    # Launch Application
    ##############################
    while (1):
        ##############################
        # Setup Audio
        ##############################
        p = pyaudio.PyAudio()
        stream = p.open(format=FORMAT, channels=CHANNELS, rate=RATE, input=True, frames_per_buffer=CHUNK,
                        stream_callback=audio_samples, input_device_index=MICROPHONE_INDEX)

        ##############################
        # Start Non-Blocking Stream
        ##############################
        print("# Live Prediction Using Microphone: %s" % (mic_desc))
        stream.start_stream()
        while stream.is_active():
            time.sleep(0.1)

