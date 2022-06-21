from django.db import models

# Create your models here.
class VisualComponent(models.Model):
    name = models.CharField(max_length=8)
    current_value = models.FloatField(default=0.0)
    created_at = models.DateTimeField(auto_now_add=True)
