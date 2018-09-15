/*

#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main(void)
{
	int computer, user;

	srand(time(NULL));
	computer = rand()%3;

	printf("가위(1), 바위(2), 보(3), 종료(0) 중 한 개 선택: ");
	scanf("%d", &user);

	switch(user)
	{
		case 1:
			printf("사용자: 가위, ");

			if (computer == 1)
			{
				printf("컴퓨터: 가위 -> 비겼습니다.\n");
				break;
			}
			else if (computer == 2)
			{
				printf("컴퓨터: 바위 -> 졌습니다.\n");
				break;
			}
			else
			{
				printf("컴퓨터: 보 -> 이겼습니다.\n");
				break;
			}

		case 2:
			printf("사용자: 바위, ");
			
			if (computer == 1)
			{
				printf("컴퓨터: 가위 -> 이겼습니다.\n");
				break;
			}
			else if (computer == 2)
			{
				printf("컴퓨터: 바위 -> 비겼습니다.\n");
				break;
			}
			else
			{
				printf("컴퓨터: 보 -> 졌습니다.\n");
				break;
			}

		case 3:
			printf("사용자: 보, ");

			if (computer == 1)
			{
				printf("컴퓨터: 가위 -> 졌습니다.\n");
				break;
			}
			else if (computer == 2)
			{
				printf("컴퓨터: 바위 -> 이겼습니다.\n");
				break;
			}
			else
			{
				printf("컴퓨터: 보 -> 비겼습니다.\n");
				break;
			}

		default:
			printf("종료합니다.\n");
	}

	return 0;
}

*/