from django.db import models

class Formulario(models.Model):
    nombre = models.CharField(max_length=50)
    edad = models.PositiveIntegerField()
    email = models.CharField(max_length=50)
    profesion = models.CharField(max_length=50)