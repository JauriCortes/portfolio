from django.shortcuts import render
from django.http import JsonResponse

from .models import Author

# Create your views here.

def index(request):
    return JsonResponse({
        "status": "online",
        "message": "Buena, la rata estamos es programando mi papacho"
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
    