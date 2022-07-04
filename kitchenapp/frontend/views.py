from wsgiref import headers
from django.shortcuts import render
from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
from pydantic import Json
from rest_framework.parsers import JSONParser

from inference import start
from record import Recorder

# set up recorder and stream
file_name = "output.wav"
recorder = Recorder(file_name)

def vue_test(request):
    return render(request, 'frontend/test.html')


def index(request, *args, **kwargs):
    if request.method == "POST":
        class_label, confidence = start(recorder)
        return render(request, 'frontend/index.html', {'classLabel': class_label, 'confidence': confidence})

    return render(request, 'frontend/index.html', {'classLabel': "initial", 'confidence': 0})

# def App(request, *args, **kwargs):


def get_prediction(request):
    is_ajax = True

    if is_ajax:
        if request.method == 'GET':
            class_label, confidence = start(recorder)
            my_data = {'classLabel': class_label,
                       'confidence': str(round(confidence, 2))}
            return JsonResponse(my_data)
        return JsonResponse({'status': 'Invalid request'}, status=400)
    else:
        return HttpResponseBadRequest('Invalid request')

@csrf_exempt
def list_available_microphones(request):
    if request.method == 'GET':
        audio_devices = recorder.available_microphones()
        data = {'devices': audio_devices}
        return JsonResponse(data)
    elif request.method == 'POST':
        selected_mic = JSONParser().parse(request)
        recorder.set_mic_index(selected_mic['idx'])
        return JsonResponse(selected_mic)
    return JsonResponse({'status': 'Invalid request'}, status=400)
