from django.shortcuts import render, redirect
from .models import Formulario
from django.contrib import messages

def index(request):
    formulario = Formulario.objects.all()
    data = {'formulario' : formulario}
    return render(request, 'index.html', data)

def registrarUsuario(request):
    nombre = request.POST['nombre']
    edad = request.POST['edad']
    email = request.POST['email']
    profesion = request.POST['profesion']

    formulario = Formulario.objects.create(nombre=nombre, edad=edad, email=email, profesion=profesion)
    messages.success(request, 'Usuario registrado con éxito')

    return redirect('/')

def edicionUsuario(request, nombre):
    formulario = Formulario.objects.get(nombre=nombre)
    data = {'formulario' : formulario}
    return render(request, 'edicionUsuario.html', data)

def editarUsuario(request):
    nombre = request.POST['nombre']
    edad = request.POST['edad']
    email = request.POST['email']
    profesion = request.POST['profesion']

    formulario = Formulario.objects.get(nombre=nombre)
    formulario.nombre = nombre
    formulario.edad = edad
    formulario.email = email
    formulario.profesion = profesion
    formulario.save()
    messages.success(request, 'Usuario actualizado con éxito')

    return redirect('/')

def eliminarUsuario(request, nombre):
    formulario = Formulario.objects.get(nombre=nombre)
    formulario.delete()
    messages.success(request, 'Usuario eliminado con éxito')

    return redirect('/')