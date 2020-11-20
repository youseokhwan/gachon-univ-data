from django.contrib import admin
from django.urls import path, include
from mysite.views import HomeView, UserCreateView, UserCreateDoneTV

# 9장 추가
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),

    # auth
    path('accounts/', include('django.contrib.auth.urls')),  # 10장
    path('accounts/register/', UserCreateView.as_view(), name='register'),  # 10장
    path('accounts/register/done/', UserCreateDoneTV.as_view(), name='register_done'),  # 10장

    # shkim
    path('', HomeView.as_view(), name='home'),  ## 127.0.0.1/, 4장 추가
    path('bookmark/', include('bookmark.urls')),
    path('blog/', include('blog.urls')),
    path('namecard/', include('namecard.urls')),
    path('student/', include('student.urls')),
    path('photo/', include('photo.urls')),  # 9장 추가
    path('sugang/', include('sugang.urls')),  # 9장 실습
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)  # 9장 추가
