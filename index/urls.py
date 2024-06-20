from django.contrib import admin
from django.urls import path, include
from index import views
urlpatterns = [    
    path("", views.index, name="index"),
    path("stack/", views.stack, name="stack"),
    path("project", views.project, name="project"),
]