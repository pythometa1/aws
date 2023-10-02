from django.db import models

# Create your models here.
from django.db import models

class Booking(models.Model):
    name = models.CharField(max_length=100)
    number = models.CharField(max_length=15)
    selectedService = models.CharField(max_length=50)
    address = models.TextField(max_length=200)

    def __str__(self):
        return self.name
    


# models.py
from django.db import models

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    telephone = models.CharField(max_length=15)
    postcode = models.CharField(max_length=200)
    pests = models.CharField(max_length=100)
    establishmentType = models.CharField(max_length=20)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
