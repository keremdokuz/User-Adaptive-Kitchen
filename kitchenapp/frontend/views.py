from django.shortcuts import render
import random

from inference import start

from django.views.decorators.csrf import csrf_exempt

# Create your views here.


@csrf_exempt
def index(request, *args, **kwargs):
    if request.method == "POST":
        print("WE got here")
        class_label = "A"
        confidence = random.randint(1,100)
        return render(request, 'frontend/index.html', {'classLabel': class_label, 'confidence': confidence})

    class_label, confidence = start()
    
    return render(request, 'frontend/index.html', {'classLabel': class_label, 'confidence': confidence})

#@csrf_exempt
#def App(request, *args, **kwargs):
    
