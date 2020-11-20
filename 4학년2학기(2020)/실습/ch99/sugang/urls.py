from django.urls import path
from django.views.generic import ListView, DetailView
from sugang.models import Course, Sugang

# 11/6 실습
from sugang import views


app_name = 'sugang'
urlpatterns = [
    path('', ListView.as_view(model=Course), name='index'),
    path('course/<int:pk>/', DetailView.as_view(model=Course), name='course_detail'),
    path('sugang/<int:pk>/', DetailView.as_view(model=Sugang), name='sugang_detail'),

    # 11/6 실습
    path('course/add/', views.CourseSugangCV.as_view(), name='course_add'),
    path('course/change/', views.CourseChangeLV.as_view(), name='course_change'),
    path('course/<int:pk>/update/', views.CourseSugangUV.as_view(), name='course_update'),
    path('course/<int:pk>/delete/', views.CourseDelV.as_view(), name='course_delete'),
    path('sugang/add/', views.SugangCV.as_view(), name='sugang_add'),
    path('sugang/change/', views.SugangChangeLV.as_view(), name='sugang_change'),
    path('sugang/<int:pk>/update/', views.SugangUV.as_view(), name='sugang_update'),
    path('sugang/<int:pk>/delete/', views.SugangDelV.as_view(), name='sugang_delete'),
]
