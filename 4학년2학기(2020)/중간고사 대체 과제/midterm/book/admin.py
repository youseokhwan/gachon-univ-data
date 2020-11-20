from django.contrib import admin
from book.models import Book


@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = (
        'isbn',
        'title',
        'author',
        'publisher',
        'pubdate',
        # 'price',
        # 'description',
        # 'image'
    )
