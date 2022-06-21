from django.urls import path
from .views import VisualComponentView

urlpatterns = [
    path('home', VisualComponentView.as_view()),
]