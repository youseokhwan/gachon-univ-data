from django.urls import path
from mypage.views import BookLV, BookDV, TitleSearchFormView, BookAV, BookYAV


app_name = 'mypage'
urlpatterns = [
    # root - 전체 도서 목록
    path('', BookLV.as_view(), name='index'),

    # DetailView - 도서 상세정보
    path('<str:pk>/', BookDV.as_view(), name='detail'),

    # FormView - 제목 검색
    path('search/title/', TitleSearchFormView.as_view(), name='title_search'),

    # ArchiveIndexView - 연도별 검색
    path('archive/year', BookAV.as_view(), name='year_search'),

    # YearArchiveView - 해당 연도의 도서 목록
    path('archive/<int:year>/', BookYAV.as_view(), name='year_archive')
]
