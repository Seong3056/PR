from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def stack(request):
    return render(request, 'stack.html')

def project(request):
    return render(request, 'project.html')
# Create your views here.
