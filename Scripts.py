from django.db import models

class Users(models.Model):
	user_name = models.CharField(max_length=20)
	user_information = models.CharField(max_length=255)
	user_password = models.CharField(max_length=30)
	user_id = models.AutoField(primary_key=True)
class Events(models.Model):
	event_name = models.CharField(max_length=255)
	event_location = models.Charfield(max_length=255)
	event_ID = models.AutoField(primary_key=True)
