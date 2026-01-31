from django.db import models

# Create your models here.
def author_image_path(instance, filename):
    return f"author/{instance.id}/{filename}"

def project_image_path(instance, filename):
    return f"projects/{instance.id}/{filename}"
    

class Author(models.Model):
    author_name = models.CharField(max_length=30),
    author_picture = models.ImageField(upload_to = author_image_path),
    author_description = models.ImageField(max_length=200),
    author_biography = models.TextField(),
    author_mail = models.EmailField(),
    author_github = models.URLField(),
    author_linkedin = models.URLField(),
    contact_MD = models.TextField()


    def __str__(self):
        return self.author_name

class Technology(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Project(models.Model):
    project_name = models.CharField(max_length=30),
    project_picture = models.ImageField(upload_to = project_image_path),
    project_github = models.URLField(),
    project_link = models.URLField(blank=True)
    project_description = models.TextField(),
    technologies = models.ManyToManyField(
        Technology,
        related_name="projects"
    )

    def __str__(self):
        return self.project_name


class About(models.Model):

    about_MD = models.TextField(),
    about_github = models.URLField(),
    about_doc = models.URLField(),

    def __str__(self):
        return "about"
    

