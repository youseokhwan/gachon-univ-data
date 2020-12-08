from django.db import models
from django.urls import reverse
from baseball.fields import ThumbnailImageField


class Team(models.Model):
    name = models.CharField('NAME', max_length=30)
    hometown = models.CharField('HOMETOWN', max_length=30)
    stadium = models.CharField('STADIUM', max_length=30)
    founding_day = models.DateField('FOUNDING_DAY')
    owner = models.ForeignKey('auth.User', on_delete=models.CASCADE, verbose_name='OWNER', blank=True, null=True)

    class Meta:
        ordering = ('name',)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('baseball:team_detail', args=(self.id,))


class Player(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    name = models.CharField('NAME', max_length=30)
    image = ThumbnailImageField('IMAGE', upload_to='baseball/%Y/%m')
    position = models.CharField('POSITION', max_length=30)
    birth_day = models.DateField('BIRTH_DAY')
    owner = models.ForeignKey('auth.User', on_delete=models.CASCADE, verbose_name='OWNER', blank=True, null=True)

    class Meta:
        ordering = ('name',)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('baseball:player_detail', args=(self.id,))
