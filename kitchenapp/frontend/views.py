from django.shortcuts import render

from inference import start

# Create your views here.
def index(request, *args, **kwargs):

    class_label, confidence = start()
    return render(request, 'frontend/index.html', {'classLabel': class_label, 'confidence': confidence})

