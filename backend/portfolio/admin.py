from django.contrib import admin
from .models import Author, Technology, Project, About

# Register your models here.
admin.site.register(Author)
admin.site.register(Technology)
admin.site.register(Project)
admin.site.register(About)