import os
import sys

ruta = '/var/www/html/formularioPerfecto'
sys.path
sys.path.insert(0, '/var/www/html/formularioPerfecto')

os.environ['DJANGO-SETTINGS-MODULE'] = 'formularioPerfecto.settings'

import django.core.handlers.wsgi
application = django.core.handlers.wsgi.WSGIHandler()