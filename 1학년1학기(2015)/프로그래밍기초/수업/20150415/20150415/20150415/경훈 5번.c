
/*

#include<stdio.h>
#include<stdlib.h>
#include<time.h>
int main(void)
{
int a;        
 int random;       
 srand((unsigned)time(NULL));
 random=rand()%3+1;
 printf("사용자가 낼 경우를 고르세요!\n가위(1) 바위(2) 보(3) 입력:");
 scanf("%d", &a);
 
 if(1==random)
 {
  switch(a)
  {
  case 1:
   printf("컴퓨터는 가위(1) 당신은 가위(1) 당신은 비겼습니다.");
   break;
  case 2:
   printf("컴퓨터는 가위(1) 당신은 바위(2) 당신은 이겼습니다.");
   break;
  case 3:
   printf("컴퓨터는 가위(1) 당신은 보(3) 당신은 졌습니다.");
   break;
  }
 }
 if(2==random)
 {
  switch(a)
  {
  case 1:
   printf("컴퓨터는 바위 당신은 가위 당신은 졌습니다.");
   break;
  case 2:
   printf("컴퓨터는 바위 당신은 바위 당신은 비겼습니다.");
   break;
  case 3:
   printf("컴퓨터는 바위 당신은 보 당신은 이겼습니다.");
   break;
  }
 }
 if(3==random)
 {
  switch(a)
  {
  case 1:
   printf("컴퓨터는 보 당신은 가위 당신은 이겼습니다.");
   break;
  case 2:
   printf("컴퓨터는 보 당신은 바위 당신은 졌습니다.");
   break;
  case 3:
   printf("컴퓨터는 보 당신은 보 당신은 비겼습니다.");
   break;
  }
 }
 
 return 0;
}

*/