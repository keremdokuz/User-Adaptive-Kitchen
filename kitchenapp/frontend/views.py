from django.shortcuts import render
from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt

from inference import start
from record import Recorder

# set up recorder and stream
file_name = "output.wav"
recorder = Recorder(file_name)

recipe = {
    'title': 'THIS DISH',
    'steps': [
        {
            'id': 1,
            'desc': 'Turn on stove',
            'feature': 'none',
            'hint': 'Watch out for your fingers!'
        },
        {
            'id': 2,
            'desc': 'Put water in pot and start boiling',
            'feature': 'runningWater',
            'hint': 'Add some salt too.'
        },
        {
            'id': 3,
            'desc': 'Chop vegetables and put them into pot',
            'feature': 'chopping',
            'hint': 'Tomatoes work especially well.'
        },
        {
            'id': 4,
            'desc': 'Heat up last night\'s leftovers in microwave',
            'feature': 'microwave',
            'hint': 'One to two minutes.'
        },
    ]
}

def vue_test(request):
    return render(request, 'frontend/test.html')


def index(request, *args, **kwargs):
    if request.method == "POST":
        class_label, confidence = start(recorder)
        return render(request, 'frontend/index.html', {'classLabel': class_label, 'confidence': confidence})

    return render(request, 'frontend/index.html', {'classLabel': "initial", 'confidence': 0})

# def App(request, *args, **kwargs):


@csrf_exempt
def get_prediction(request):
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'

    if is_ajax:
        if request.method == 'GET':
            class_label, confidence = start(recorder)
            my_data = {'classLabel': class_label,
                       'confidence': str(round(confidence, 2))}
            return JsonResponse(my_data)
        return JsonResponse({'status': 'Invalid request'}, status=400)
    else:
        return HttpResponseBadRequest('Invalid request')
