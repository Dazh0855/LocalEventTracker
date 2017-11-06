from django.shortcuts import render
from django.http import HttpResponse

from .models import User

# Create your views here.
def index(request):
    # handle user request
    uid = request.POST.get('uid', '')
    uname = request.POST.get('uname', '')
    udata = request.POST.get('udata', '')

    # populate database based on Django model
    user = User.objects.create(user_id = uid,
                                user_name= uname,
                                user_data = udata)

    return HttpResponse("User added!")
