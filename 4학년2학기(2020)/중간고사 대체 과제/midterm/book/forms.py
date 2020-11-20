from django import forms


class BookSearchForm(forms.Form):
    keyword = forms.CharField(
        widget = forms.TextInput(attrs={'class':'form-control'}),
        label = '',
    )