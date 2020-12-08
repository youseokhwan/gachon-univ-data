from book.models import Book
from book.forms import BookSearchForm
from django.views.generic import FormView, TemplateView
from django.shortcuts import render, redirect
from django.contrib import messages
from urllib import request, parse
from pprint import pprint
import json, re, datetime


class BookSearchFormView(FormView):
    form_class = BookSearchForm
    template_name = 'book/book.html'

    def form_valid(self, form):
        keyword = form.cleaned_data['keyword']
        url = 'https://openapi.naver.com/v1/search/book.json?query=' + parse.quote(keyword) + '&display=30&start=1'

        # 네이버 책 API 호출
        api_request = request.Request(url)
        api_request.add_header('X-Naver-Client-Id', 'qk7TJRGtBZFSBy3pIoIN')
        api_request.add_header('X-Naver-Client-Secret', 'J2IQ57jCr0')
        response = request.urlopen(api_request)

        if response.getcode() == 200:
            body = response.read()
            result = json.loads(body.decode('utf-8'))
            items = result.get('items')
            pprint(items)

            # 문자열에서 HTML 태그 제거
            for item in items:
                item['title'] = removeHtmlTag(item['title'])
                item['author'] = removeHtmlTag(item['author'])
                item['publisher'] = removeHtmlTag(item['publisher'])
                item['description'] = removeHtmlTag(item['description'])

                # 이미지가 없을 경우 대체 이미지 표시
                if item['image'] == '':
                    item['image'] = '/static/img/no-image.png'

            context = {
                'form': form,
                'keyword': keyword,
                'object_list': items,
            }

            return render(self.request, self.template_name, context)
        elif response.getcode() == 400:
            pprint("잘못된 쿼리입니다.")
        elif response.getcode() == 500:
            pprint("네이버 API 서버 오류입니다.")
        else:
            pprint("알 수 없는 에러: %s" % response.getcode())


class BookInsertAndSearchFormView(TemplateView):
    template_name = 'book/book.html'

    # 도서 추가
    def post(self, req):
        try:
            book = Book(
                isbn=req.POST['isbn'],
                title=req.POST['title'],
                author=req.POST['author'],
                publisher=req.POST['publisher'],
                pubdate=datetime.datetime.strptime(req.POST['pubdate'], "%Y%m%d").date(),
                price=req.POST['price'],
                description=req.POST['description'],
                image=req.POST['image'],
            )
            book.save()

            # success message
            messages.info(req, req.POST['title'])
        finally:
            return redirect('/book')


# 문자열에서 HTML 태그 제거
def removeHtmlTag(res):
    return re.sub(re.compile('<.*?>'), '', res)