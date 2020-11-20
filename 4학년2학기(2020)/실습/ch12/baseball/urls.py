from django.urls import path
from baseball import views


app_name = 'baseball'
urlpatterns = [
    path('', views.TeamLV.as_view(), name='index'),
    path('team/', views.TeamLV.as_view(), name='team_list'),
    path('team/<int:pk>/', views.TeamDV.as_view(), name='team_detail'),
    path('player/<int:pk>/', views.PlayerDV.as_view(), name='player_detail'),

    path('team/add/', views.TeamPlayerCV.as_view(), name='team_add'),
    path('team/change/', views.TeamChangeLV.as_view(), name='team_change'),
    path('team/<int:pk>/update/', views.TeamPlayerUV.as_view(), name='team_update'),
    path('team/<int:pk>/delete/', views.TeamDelV.as_view(), name='team_delete'),
    path('player/add/', views.PlayerCV.as_view(), name='player_add'),
    path('player/change/', views.PlayerChangeLV.as_view(), name='player_change'),
    path('player/<int:pk>/update/', views.PlayerUV.as_view(), name='player_update'),
    path('player/<int:pk>/delete/', views.PlayerDelV.as_view(), name='player_delete'),

    path('team/search/', views.TeamSearchFormView.as_view(), name='team_search'),
    path('player/search/', views.PlayerSearchFormView.as_view(), name='player_search'),
]