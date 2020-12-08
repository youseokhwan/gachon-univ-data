from django.db import models
from django.urls import reverse


class Book(models.Model):
    isbn = models.CharField('ISBN', max_length=50, primary_key=True)  # ISBN
    title = models.CharField('TITLE', max_length=200)                 # 도서 제목
    author = models.CharField('AUTHOR', max_length=200)               # 저자
    publisher = models.CharField('PUBLISHER', max_length=100)         # 출판사
    pubdate = models.DateField('PUBDATE')                             # 출간일
    price = models.IntegerField('PRICE', default=0)                   # 정가
    description = models.CharField('DESCRIPTION', max_length=1000)    # 줄거리
    image = models.URLField('IMAGE', max_length=200)                  # 썸네일 URL

    class Meta:
        verbose_name = 'Book'
        verbose_name_plural = 'Books'
        ordering = ['isbn']

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('mypage:detail', args=(self.isbn,))

    def get_previous(self):
        return self.get_previous_by_isbn()

    def get_next(self):
        return self.get_next_by_isbn()
