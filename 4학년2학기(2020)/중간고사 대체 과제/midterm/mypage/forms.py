from django import forms


class TitleSearchForm(forms.Form):
    title = forms.CharField(
        widget = forms.TextInput(attrs={'class': 'form-control'}),
        label = '',
    )