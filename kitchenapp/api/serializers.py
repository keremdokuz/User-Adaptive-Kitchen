from rest_framework import serializers
from .models import VisualComponent

class Serializer(serializers.ModelSerializer):
    class Meta:
        model = VisualComponent
        fields = ('id', 'name', 'current_value', 'created_at')

