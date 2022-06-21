from django.shortcuts import render
import sys
sys.path.append(".../yamnet/")

# Create your views here.
def index(request, *args, **kwargs):

    class_label = "microwave"  #todo: import yamnet prediction
    return render(request, 'frontend/index.html', {'classLabel': class_label})
