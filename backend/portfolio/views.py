from django.shortcuts import render
from django.http import JsonResponse

from .models import Author, Project, About

# Create your views here.

def index(request):
    return JsonResponse({
        "status": "online",
        "message": "Buena la rata, estamos es programando mi papacho"
    })

def author(request):
    author = Author.objects.first()
    if author:
        data = {
            "author_name": author.author_name,
            "author_picture": author.author_picture.url if author.author_picture else None,
            "author_description": author.author_description,
            "author_biography": author.author_biography,
            "author_mail": author.author_mail,
            "author_github": author.author_github,
            "author_linkedin": author.author_linkedin,
            "contact_MD": author.contact_MD
        }
    else:
        data = {}

    return JsonResponse(data)

def projects(request):

    projects = Project.objects.all()

    data = [
        {
            "id": p.id,
            "project_name": p.project_name,
            "project_picture": p.project_picture.url if p.project_picture else None,
            "project_github": p.project_github,
            "project_link": p.project_link,
            "project_description": p.project_description,
            "technologies": [
                {
                    "id": tech.id,
                    "name": tech.name
                }
                for tech in p.technologies.all()
            ]
        }
        for p in projects
    ]

    return JsonResponse(data, safe=False)

def about(request):

    about = About.objects.first()

    if about:
        data = {
            "id" : about.id,
            "about_name": about.about_name,
            "about_MD" : about.about_MD,
            "about_github": about.about_github,
            "about_doc": about.about_doc
        }
    else:
        data = {}

    return JsonResponse(data)