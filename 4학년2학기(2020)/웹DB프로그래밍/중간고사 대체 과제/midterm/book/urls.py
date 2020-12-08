from django.urls import path
from book.views import BookSearchFormView, BookInsertAndSearchFormView


app_name = 'book'
urlpatterns = [
    # root
    path('', BookSearchFormView.as_view(), name='index'),

    # 내 도서 추가
    path('insert/', BookInsertAndSearchFormView.as_view(), name='insert')
]
