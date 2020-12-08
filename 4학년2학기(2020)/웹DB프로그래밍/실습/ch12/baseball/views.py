from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView, FormView
from baseball.models import Team, Player

from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import redirect
from django.urls import reverse_lazy
from mysite.views import OwnerOnlyMixin
from baseball.forms import PlayerInlineFormSet, TeamSearchForm, PlayerSearchForm

from django.db.models import Q
from django.shortcuts import render


class TeamLV(ListView):
    model = Team


class TeamDV(DetailView):
    model = Team


class PlayerDV(DetailView):
    model = Player


class PlayerCV(LoginRequiredMixin, CreateView):
    model = Player
    fields = ('team', 'name', 'image', 'position', 'birth_day')
    success_url = reverse_lazy('baseball:index')

    def form_valid(self, form):
        form.instance.owner = self.request.user
        return super().form_valid(form)


class PlayerChangeLV(LoginRequiredMixin, ListView):
    model = Player
    template_name = 'baseball/player_change_list.html'

    def get_queryset(self):
        return Player.objects.filter(owner=self.request.user)


class PlayerUV(OwnerOnlyMixin, UpdateView):
    model = Player
    fields = ('team', 'name', 'image', 'position', 'birth_day')
    success_url = reverse_lazy('baseball:index')


class PlayerDelV(OwnerOnlyMixin, DeleteView):
    model = Player
    success_url = reverse_lazy('baseball:index')


class TeamChangeLV(LoginRequiredMixin, ListView):
    model = Team
    template_name = 'baseball/team_change_list.html'

    def get_queryset(self):
        return Team.objects.filter(owner=self.request.user)


class TeamDelV(OwnerOnlyMixin, DeleteView):
    model = Team
    success_url = reverse_lazy('baseball:index')


class TeamPlayerCV(LoginRequiredMixin, CreateView):
    model = Team
    fields = ('name', 'hometown', 'stadium', 'founding_day')
    success_url = reverse_lazy('baseball:index')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        if self.request.POST:
            context['formset'] = PlayerInlineFormSet(self.request.POST, self.request.FILES)
        else:
            context['formset'] = PlayerInlineFormSet()
        return context

    def form_valid(self, form):
        form.instance.owner = self.request.user
        context = self.get_context_data()
        formset = context['formset']
        for playerform in formset:
            playerform.instance.owner = self.request.user
        if formset.is_valid():
            self.object = form.save()
            formset.instance = self.object
            formset.save()
            return redirect(self.get_success_url())
        else:
            return self.render_to_response(self.get_context_data(form=form))


class TeamPlayerUV(OwnerOnlyMixin, UpdateView):
    model = Team
    fields = ('name', 'hometown', 'stadium', 'founding_day')
    success_url = reverse_lazy('baseball:index')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        if self.request.POST:
            context['formset'] = PlayerInlineFormSet(self.request.POST, self.request.FILES, instance=self.object)
        else:
            context['formset'] = PlayerInlineFormSet(instance=self.object)
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


class TeamSearchFormView(FormView):
    form_class = TeamSearchForm
    template_name = 'baseball/team_search.html'

    def form_valid(self, form):
        searchWord = form.cleaned_data['search_word']
        team_list = Team.objects.filter(Q(name__icontains=searchWord)).distinct()

        context = {}
        context['form'] = form
        context['search_term'] = searchWord
        context['object_list'] = team_list

        return render(self.request, self.template_name, context)


class PlayerSearchFormView(FormView):
    form_class = PlayerSearchForm
    template_name = 'baseball/player_search.html'

    def form_valid(self, form):
        searchWord = form.cleaned_data['search_word']
        player_list = Player.objects.filter(Q(name__icontains=searchWord)).distinct()

        context = {}
        context['form'] = form
        context['search_term'] = searchWord
        context['object_list'] = player_list

        return render(self.request, self.template_name, context)