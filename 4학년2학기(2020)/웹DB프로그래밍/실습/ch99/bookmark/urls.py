from django.urls import path
# from bookmark.views import BookmarkLV, BookmarkDV, SearchFormView # 11장 주석처리
from bookmark import views # 11장 추가


app_name = 'bookmark'
urlpatterns = [
    path('', views.BookmarkLV.as_view(), name='index'),
    path('<int:pk>/', views.BookmarkDV.as_view(), name='detail'),

    path('search/', views.SearchFormView.as_view(), name='search'),

    # 11장 추가
    path('add/', views.BookmarkCreateView.as_view(), name='add'),
    path('change/', views.BookmarkChangeLV.as_view(), name='change'),
    path('<int:pk>/update/', views.BookmarkUpdateView.as_view(), name='update'),
    path('<int:pk>/delete/', views.BookmarkDeleteView.as_view(), name='delete')
]
