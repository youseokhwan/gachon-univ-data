from django.contrib import admin
from sugang.models import Course, Sugang


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'professor')


@admin.register(Sugang)
class SugangAdmin(admin.ModelAdmin):
    list_display = ('id', 'student_id', 'name', 'create_dt')
