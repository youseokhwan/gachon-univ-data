///*
//주민등록번호 앞부분 6자리를 문자열로 입력하면 연월일을 분리해서 출력하고
//현재 나이와 생년에 대한 띠를 계산하는 프로그램을 작성하시오.
//현재 나이는 (현재 년도 - 출생년도)로 계산하고, 1900년은 쥐띠해입니다.
//
//자 축 인 묘 진 사 오 미 신 유 술 해
//*/
//
//#include <stdio.h>
//
//int main ()
//{
//   char A[12]={'g', 'c', 'i', 'm', 'j', 's', 'o', 'm', 'c', 'y', 'S', 'h'};
//   int birth=0;
//   char *p=A;
//   int x;
//   int i;
//   int year, month, day;
//
//   printf("생년월일입력: ");
//   scanf("%d", &birth);
//
//   //970104
//   year=birth/10000;
//   month=(birth%10000)/100;
//   day=(birth%100);
//
//   printf("%d년 %d월 %d일\n", year, month, day);
//   
//   x=year%12;
//
//   printf("%c띠\n", p[x]);
//
//   
//   return 0;
//}