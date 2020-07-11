from rest_framework import serializers
from .models import Seg

class SegSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seg
        fields = '__all__'

class SegNamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seg
        fields = ('id', 'nome')

