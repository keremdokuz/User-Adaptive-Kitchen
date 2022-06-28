import json
import pyaudio
from django.shortcuts import render
import random
from django.http import JsonResponse

from inference import start

from django.views.decorators.csrf import csrf_exempt

# Create your views here.


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

stream.start_stream()

@csrf_exempt
def index(request, *args, **kwargs):
    if request.method == "POST":
        print("WE got here")
        class_label, confidence = start(stream, p)

        return render(request, 'frontend/index.html', {'classLabel': class_label, 'confidence': confidence})
    
    return render(request, 'frontend/index.html', {'classLabel': "initial", 'confidence': 0})

#@csrf_exempt
#def App(request, *args, **kwargs):

@csrf_exempt
def getPrediction(request, *args, **kwargs):
    class_label, confidence = start(stream, p)
    my_data = {'classLabel': "claabel", 'confidence': "confie"}
    response = JsonResponse(my_data)
    return response
    
