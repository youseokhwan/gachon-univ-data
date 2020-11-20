from django import forms
from django.forms import Form, inlineformset_factory
from baseball.models import Team, Player


PlayerInlineFormSet = inlineformset_factory(Team, Player, fields=['name', 'image', 'position', 'birth_day'], extra=2)


class TeamSearchForm(forms.Form):
    search_word = forms.CharField(label='Team Name')


class PlayerSearchForm(forms.Form):
    search_word = forms.CharField(label='Player Name')
