from rest_framework import viewsets
from . import models
from . import serializers

class SegViewset(viewsets.ModelViewSet):
    queryset = models.Seg.objects.all()
    serializer_class = serializers.SegSerializer