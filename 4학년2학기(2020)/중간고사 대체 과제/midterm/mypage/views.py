from django.views.generic import ListView, DetailView, FormView, ArchiveIndexView, YearArchiveView
from book.models import Book
from mypage.forms import TitleSearchForm
from django.shortcuts import render
from django.db.models import Q


# ListView
class BookLV(ListView):
    model = Book
    template_name = 'mypage/book_list.html'
    paginate_by = 6


# DetailView
class BookDV(DetailView):
    model = Book
    template_name = 'mypage/book_detail.html'


# FormView
class TitleSearchFormView(FormView):
    form_class = TitleSearchForm
    template_name = 'mypage/book_title_search.html'

    def form_valid(self, form):
        title = form.cleaned_data['title']
        book_list = Book.objects.filter(Q(title__icontains=title)).distinct()

        context = {
            'form': form,
            'search_term': title,
            'object_list': book_list
        }

        return render(self.request, self.template_name, context)


# ArchiveIndexView
class BookAV(ArchiveIndexView):
    model = Book
    template_name = 'mypage/book_year_search.html'
    date_field = 'pubdate'
    allow_empty = True


# YearArchiveView
class BookYAV(YearArchiveView):
    model = Book
    template_name = 'mypage/book_archive_year.html'
    date_field = 'pubdate'
    make_object_list = True
    paginate_by = 6