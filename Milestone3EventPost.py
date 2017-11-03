from django.shortcuts import render
from django.http import HttpResponse

from .models import Events

import urllib2
import json

# Create your views here.
def index(request):
    url = "http://api.eventful.com/rest/events/get?7eb&id=E0-001-000278174-6"
    
    req = json.load(urllib2.urlopen("url")) 

    eid = req["id"]
    etitle = req["tile"]
    etime = req["start_time"]
    eloc = req["address"]

    event = Events.objects.create(event_id = eid,
                                    event_title = etitle,
                                    event_time = etime,
                                    event_location = eloc)

    return HttpResponse("Event added!")
