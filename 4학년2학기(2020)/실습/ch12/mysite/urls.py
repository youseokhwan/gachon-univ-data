from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from mysite.views import HomeView, UserCreateView, UserCreateDoneTV


urlpatterns = [
    path('admin/', admin.site.urls),

    path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/register/', UserCreateView.as_view(), name='register'),
    path('accounts/register/done/', UserCreateDoneTV.as_view(), name='register_done'),

    path('', HomeView.as_view(), name='home'),
    path('baseball/', include('baseball.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
