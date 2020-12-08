from django.db import models
from django.contrib.auth.models import User  # 11장 추가


# Create your models here.
class Student(models.Model):
    student_id = models.CharField('STUDENT ID', max_length=9, blank=False)
    name = models.CharField('NAME', max_length=50)
    major = models.CharField('MAJOR', max_length=50)
    grade = models.CharField('GRADE', max_length=1)
    status = models.CharField('STATUS', max_length=50)
    email = models.EmailField('EMAIL', max_length=50)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)  # 11장

    class Meta:
        ordering = ('student_id',)

    def __str__(self):
        return self.student_id + " " + self.name