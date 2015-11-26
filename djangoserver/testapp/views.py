from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, HttpResponseNotFound
import datetime

def current_datetime(request):
    now = datetime.datetime.now()
    html = "<html><body>It is now %s.</body></html>" % now
    return HttpResponse(html)

def not_found_view(request):
    # ...
    return HttpResponseNotFound('<h1>Page not found</h1>')
        
def found_view(request):
    # ...
    return HttpResponse('<h1>Page was found</h1>')