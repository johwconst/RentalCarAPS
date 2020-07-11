from rest_framework import serializers
from .models import Car

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'

class CarNamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ('id', 'placa')