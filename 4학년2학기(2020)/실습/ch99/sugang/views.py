from django.views.generic import ListView, DetailView
from sugang.models import Course, Sugang

# 11/6 실습
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import redirect
from django.urls import reverse_lazy
from django.views.generic import CreateView, UpdateView, DeleteView
from mysite.views import OwnerOnlyMixin
from sugang.forms import SugangInlineFormSet


class SugangCV(LoginRequiredMixin, CreateView):
    model = Sugang
    fields = ('course', 'student_id', 'name')
    success_url = reverse_lazy('sugang:index')

    def form_valid(self, form):
        form.instance.owner = self.request.user
        return super().form_valid(form)


class SugangChangeLV(LoginRequiredMixin, ListView):
    model = Sugang
    template_name = 'sugang/sugang_change_list.html'

    def get_queryset(self):
        return Sugang.objects.filter(owner=self.request.user)


class SugangUV(OwnerOnlyMixin, UpdateView):
    model = Sugang
    fields = ('course', 'student_id', 'name')
    success_url = reverse_lazy('sugang:index')


class SugangDelV(OwnerOnlyMixin, DeleteView):
    model = Sugang
    success_url = reverse_lazy('sugang:index')


class CourseChangeLV(LoginRequiredMixin, ListView):
    model = Course
    template_name = 'sugang/course_change_list.html'

    def get_queryset(self):
        return Course.objects.filter(owner=self.request.user)


class CourseDelV(OwnerOnlyMixin, DeleteView):
    model = Course
    success_url = reverse_lazy('sugang:index')


class CourseSugangCV(LoginRequiredMixin, CreateView):
    model = Course
    fields = ('title', 'professor')
    success_url = reverse_lazy('sugang:index')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        if self.request.POST:
            context['formset'] = SugangInlineFormSet(self.request.POST)
        else:
            context['formset'] = SugangInlineFormSet()
        return context

    def form_valid(self, form):
        form.instance.owner = self.request.user
        context = self.get_context_data()
        formset = context['formset']
        for sugangform in formset:
            sugangform.instance.owner = self.request.user
        if formset.is_valid():
            self.object = form.save()
            formset.instance = self.object
            formset.save()
            return redirect(self.get_success_url())
        else:
            return self.render_to_response(self.get_context_data(form=form))


class CourseSugangUV(OwnerOnlyMixin, UpdateView):
    model = Course
    fields = ('title', 'professor')
    success_url = reverse_lazy('sugang:index')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        if self.request.POST:
            context['formset'] = SugangInlineFormSet(self.request.POST, instance=self.object)
        else:
            context['formset'] = SugangInlineFormSet(instance=self.object)
        return context

    def form_valid(self, form):
        context = self.get_context_data()
        formset = context['formset']
        if formset.is_valid():
            self.object = form.save()
            formset.instance = self.object
            formset.save()
            return redirect(self.get_success_url())
        else:
            return self.render_to_response(self.get_context_data(form=form))
