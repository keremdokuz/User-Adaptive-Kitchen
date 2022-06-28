from django.urls import path
from .views import getPrediction, index

urlpatterns = [
    path('', index),
    path('predict', getPrediction)
]