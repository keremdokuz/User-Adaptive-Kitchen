from django.urls import path
from .views import get_prediction, index

urlpatterns = [
    path('', index),
    path('predict', get_prediction)
]