/*
// 5번
#include<stdio.h>
#include<stdlib.h>
#include<time.h>
int main(void)
{
	int a, b; //a가 컴퓨터가 낸 것, b가 사용자가 낸 것

	loop:

		srand(time(NULL));
		a = rand()%3;

		printf("가위(1), 바위(2), 보(3) 중 하나를 선택하시오(숫자만 입력, 종료(0)) : ");
		scanf("%d", &b);
	
		if(b == 1 && a == 0)
		{
			printf("사용자 : 가위, 컴퓨터 : 가위 -> 비겼습니다.\n");
			goto loop;
		}
		else if(b == 1 && a == 1)
		{
			printf("사용자 : 가위, 컴퓨터 : 바위 -> 이겼습니다.\n");
			goto loop;
		}
		else if(b == 1 && a == 2)
		{
			printf("사용자 : 가위, 컴퓨터 : 보 -> 졌습니다.\n");
			goto loop;
		}

		else if(b == 2 && a == 0)
		{
			printf("사용자 : 바위, 컴퓨터 : 가위 -> 이겼습니다.\n");
			goto loop;
		}
		else if(b == 2 && a == 1)
		{
			printf("사용자 : 바위, 컴퓨터 : 바위 -> 비겼습니다.\n");
			goto loop;
		}
		else if(b == 2 && a == 2)
		{
			printf("사용자 : 바위, 컴퓨터 : 보 -> 졌습니다.\n");
			goto loop;
		}

		else if(b == 3 && a == 0)
		{
			printf("사용자 : 보, 컴퓨터 : 가위 -> 졌습니다.\n");
			goto loop;
		}

		else if(b == 3 && a == 1)
		{
			printf("사용자 : 보, 컴퓨터 : 바위 -> 이겼습니다.\n");
			goto loop;
		}
		else if(b == 3 && a == 2)
		{
			printf("사용자 : 보, 컴퓨터 : 보 -> 비겼습니다.\n");
			goto loop;
		}

		else if(b == 0)
			printf("종료합니다.\n"); goto end;

	end:

	return 0;
}
*/