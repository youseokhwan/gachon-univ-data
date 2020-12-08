from django.forms import inlineformset_factory
from sugang.models import Course, Sugang


SugangInlineFormSet = inlineformset_factory(Course, Sugang, fields=['student_id', 'name'], extra=2)
