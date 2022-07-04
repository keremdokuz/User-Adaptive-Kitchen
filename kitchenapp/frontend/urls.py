from django.urls import path
from .views import get_prediction, index, vue_test

urlpatterns = [
    path('', index),
    path('predict', get_prediction),
    path('vue', vue_test)
]