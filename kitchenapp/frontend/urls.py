from django.urls import path
from .views import get_prediction, index, vue_frontend, list_available_microphones

urlpatterns = [
    path('old', index),
    path('predict', get_prediction),
    path('', vue_frontend),
    path('mics', list_available_microphones)
]