from django.db import models
from django.contrib.auth.models import User # 11장 추가


# Create your models here.
class Bookmark(models.Model):
    title = models.CharField('TITLE', max_length=100, blank=True)
    url = models.URLField('URL', unique=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True) # 11장 추가

    def __str__(self):
        return self.title