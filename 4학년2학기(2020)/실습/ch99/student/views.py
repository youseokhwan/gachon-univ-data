from django.shortcuts import render
from django.views.generic import ListView, DetailView
from student.models import Student
from django.views.generic import FormView
from student.forms import StudentSearchForm
from django.db.models import Q

# 11장 추가
from django.views.generic import CreateView, UpdateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy
from mysite.views import OwnerOnlyMixin


# Create your views here.
class StudentLV(ListView):
    model = Student

class StudentDV(DetailView):
    model = Student

class SearchFormView(FormView):
    form_class = StudentSearchForm
    template_name = 'student/student_search.html'

    def form_valid(self, form):
        searchWord = form.cleaned_data['search_word']
        student_list = Student.objects.filter(Q(student_id__icontains=searchWord) | Q(name__icontains=searchWord) | Q(major__icontains=searchWord)).distinct()

        context = {}
        context['form'] = form
        context['search_term'] = searchWord
        context['object_list'] = student_list

        return render(self.request, self.template_name, context)

# 11장 추가
class StudentCreateView(LoginRequiredMixin, CreateView):
    model = Student
    fields = ['student_id', 'name', 'major', 'grade', 'status', 'email']
    success_url = reverse_lazy('student:index')

    def form_valid(self, form):
        form.instance.owner = self.request.user
        return super().form_valid(form)


class StudentChangeLV(LoginRequiredMixin, ListView):
    template_name = 'student/student_change_list.html'

    def get_queryset(self):
        return Student.objects.filter(owner=self.request.user)


class StudentUpdateView(OwnerOnlyMixin, UpdateView):
    model = Student
    fields = ['student_id', 'name', 'major', 'grade', 'status', 'email']
    success_url = reverse_lazy('student:index')


class StudentDeleteView(OwnerOnlyMixin, DeleteView):
    model = Student
    success_url = reverse_lazy('student:index')
