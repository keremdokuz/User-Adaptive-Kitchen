import argparse
import wave
import pyaudio
import microphones
import pyaudio


# Variables
FS = 44100  # Record at 44100 samples per second
FORMAT = pyaudio.paInt16
CHANNELS = 1
RATE = 16000
CHUNK = 1024
MICROPHONES_DESCRIPTION = []
FPS = 60.0
SECONDS = 5

MICROPHONE_INDEX = 0

p = pyaudio.PyAudio()
stream = p.open(format=FORMAT,
                channels=CHANNELS,
                rate=FS,
                frames_per_buffer=CHUNK,
                input=True,
                input_device_index=MICROPHONE_INDEX)
                    

def _set_mic_index():
    ###########################
    # Check Microphone
    ###########################
    print("=====")
    print("1 / 2: Checking Microphones... ")
    print("=====")

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


def record(file_name):
    # TODO: Implement microphone selection
    #print(MICROPHONE_INDEX)
    #if MICROPHONE_INDEX == -1:
    #    _set_mic_index()

    print('Recording...')  

    stream.start_stream()
    frames = []  # Initialize array to store frames

    # Store data in chunks for 3 seconds
    for i in range(0, int(FS / CHUNK * SECONDS)):
        data = stream.read(CHUNK)
        frames.append(data)

    # Stop and close the stream 
    stream.stop_stream()

    print('Finished recording')
    
    # Save the recorded data as a WAV file
    wf = wave.open(file_name, 'wb')
    wf.setnchannels(CHANNELS)
    wf.setsampwidth(p.get_sample_size(FORMAT))
    wf.setframerate(FS)
    wf.writeframes(b''.join(frames))
    wf.close()

    print('Saved file')