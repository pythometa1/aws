from rest_framework.serializers import ModelSerializer
from .models import Booking

class BookingSerializer(ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'



# serializers.py
from rest_framework import serializers
from .models import ContactMessage

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'
