from django.contrib import admin
from django.urls import path, include
from midterm.views import HomeView


urlpatterns = [
    # admin
    path('admin/', admin.site.urls),

    # root
    path('', HomeView.as_view(), name='home'),

    # app
    path('book/', include('book.urls')),
    path('mypage/', include('mypage.urls')),
]
