from django.shortcuts import render
from rest_framework import generics, status
from .serializers import Serializer
from .models import VisualComponent
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.
class VisualComponentView(generics.ListAPIView):
    queryset = VisualComponent.objects.all()
    serializer_class = Serializer