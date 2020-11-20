from django.db import models
from django.urls import reverse


class Course(models.Model):
    title = models.CharField('TITLE', max_length=30)
    professor = models.CharField('PROFESSOR', max_length=30)
    owner = models.ForeignKey('auth.User', on_delete=models.CASCADE, verbose_name='OWNER', blank=True, null=True)

    class Meta:
        ordering = ('title',)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('sugang:sugang_detail', args=(self.id,))


class Sugang(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    student_id = models.CharField('STUDENT_ID', max_length=30)
    name = models.CharField('NAME', max_length=30)
    create_dt = models.DateTimeField('CREATE_DT', auto_now_add=True)
    owner = models.ForeignKey('auth.User', on_delete=models.CASCADE, verbose_name='OWNER', blank=True, null=True)

    class Meta:
        ordering = ('student_id',)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('sugang:sugang_detail', args=(self.id,))
