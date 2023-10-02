from django.contrib import admin

# Register your models here.


from django.contrib import admin
from .models import Booking  # Import your Booking model

# Register your model with the admin site
@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('name', 'number', 'selectedService', 'address')
    search_fields = ('name', 'number', 'selectedService', 'address')


from .models import ContactMessage

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'telephone', 'pests', 'timestamp')
