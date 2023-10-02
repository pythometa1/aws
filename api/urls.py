from django.urls import path
from . import views
from django.urls import re_path
from django.views.generic.base import TemplateView


urlpatterns = [
     path('getbackend/',views.getbackend,name='getbackend'),
     path('contact/', views.save_contact_message, name='save_contact_message'),
     path('',views.index, name='index'),
     path("get-csrf-token/", views.get_csrf_token, name="get_csrf_token"),

     re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),

 
     ]
