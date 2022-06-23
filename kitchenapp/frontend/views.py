from django.shortcuts import render
import time
from yamnet import inference


# Create your views here.
def index(request, *args, **kwargs):

    class_label = inference.start()
    return render(request, 'frontend/index.html', {'classLabel': class_label})

