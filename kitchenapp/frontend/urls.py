from django.urls import path
from .views import get_prediction, index, vue_test, list_available_microphones

urlpatterns = [
    path('', index),
    path('predict', get_prediction),
    path('vue', vue_test),
    path('mics', list_available_microphones)
]