from django.contrib import admin
from .models import Formulario

class FormularioAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'edad', 'email', 'profesion']

admin.site.register(Formulario, FormularioAdmin)