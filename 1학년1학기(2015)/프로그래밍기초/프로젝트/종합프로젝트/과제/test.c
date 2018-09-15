#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <windows.h>

void start();
void end();
void updown_rule_explain();
void updown_select_menu();
void updown_o();
void updown_x();
void updown_end();
void sightcheck_rule();
void sightcheck_start();
void sightcheck_countdown();
void star_print();
void star_print2();
void star_print3();
void star_c_answer();
void star_w_answer();
void sightcheck_end();

int user_select, i, com_number, user_number, j, updown_score = 0;
int k, sightcheck_score = 0, star_number, l, star_answer;

int main(void)
{
	while (1)
	{
		start();

		if (user_select == 0)
			end();

		if (user_select == 1)
		{
			for (i = 1; i <= 5; i++)
			{
				updown_rule_explain();

				com_number = (rand() * time(NULL))%10 + 1;
				user_number = (rand() * time(NULL))%10 + 1;

				updown_select_menu();

				if (com_number > user_number)
				{
					if (j == 2)
						updown_o();
					else
						updown_x();
				}

				if (com_number < user_number)
				{ 
					if (j == 1)
						updown_o();
					else
						updown_x();
				}

				if (com_number == user_number)
				{
					if (j == 2)
						updown_o();
					else
						updown_x();
				}
			}

			updown_end();
		}

		if (user_select == 2)
		{
			for (k = 1; k <= 5; k++)
			{
				sightcheck_rule();
				printf("\n");
				system("pause");

				sightcheck_countdown();

				star_number = (rand() * time(NULL)) % 11 + 10;

				system("cls");
				sightcheck_rule();
				sightcheck_start();

				star_print2();

				star_print3();

				if (star_answer == star_number)
					star_c_answer();
				
				else
					star_w_answer();
			}

			sightcheck_end();
		}
	}

	return 0;
}

void start()
{
	printf("■□■□■□■□■□■□■\n");
	printf("□\t\t\t□\n");
	printf("■    <<MINI GAME>>     ■\n");
	printf("□\t\t\t□\n");
	printf("■□■□■□■□■□■□■\n\n");
	printf("1. Reverse Up-Down 게임\n");
	printf("2. 동체시력 측정게임\n");
	printf("0. 종료\n\n");
	printf("게임을 선택하세요: ");
	scanf_s("%d", &user_select);
}

void end()
{
	system("cls");
	printf("게임을 종료합니다.\n\n"); exit(0);
}

void updown_rule_explain()
{
	system("cls");
	printf("<<Reverse Up-Down 게임>>\n");
	printf("컴퓨터의 숫자를 보고 자신의 숫자를 예측하여 자신의 숫자가 높다고 생각하면 1번을, 낮거나 같다고 생각하면 2번을 선택합니다.\n");
	printf("유저의 숫자는 알려주지 않습니다.\n");
	printf("5번 플레이하며, 맞추면 1점을 획득합니다. 숫자의 범위는 1~10입니다.\n");
}

void updown_select_menu()
{
	printf("\n게임 %d / 5\t현재 스코어: %d\n\n", i, updown_score);
	printf("컴퓨터의 숫자는 %d입니다.\n", com_number);
	printf("1. 유저의 숫자가 컴퓨터의 숫자보다 높다\n");
	printf("2. 유저의 숫자가 컴퓨터의 숫자보다 낮거나 같다\n");
	printf("예측: ");
	scanf_s("%d", &j);
}

void updown_o()
{
	printf("\n정답입니다. 1점을 획득하셨습니다.\n");
	printf("컴퓨터 숫자: %d, 유저 숫자: %d\n\n", com_number, user_number);
	updown_score++;
	system("pause");
}

void updown_x()
{
	printf("\n틀렸습니다.\n");
	printf("컴퓨터 숫자: %d, 유저 숫자: %d\n\n", com_number, user_number);
	system("pause");
}

void updown_end()
{
	system("cls");
	printf("<<Reverse Up-Down 게임>> 최종결과\n\n");
	printf("최종 점수는 %d점 입니다. 축하드립니다.\n\n", updown_score);
	updown_score = 0;
	system("pause");
	system("cls");
}

void sightcheck_rule()
{
	system("cls");
	printf("<<동체시력 측정게임>>\n");
	printf("화면에 출력된 ★의 개수를 맞추는 게임입니다.\n");
	printf("3초동안 출력되며 ★ 개수의 범위는 10 ~ 20개입니다.\n");
	printf("5번 플레이하며, 맞추면 1점을 획득합니다. Enter키를 누르면 시작합니다.\n");
}

void sightcheck_start()
{
	printf("\n게임 %d / 5\t 현재 스코어: %d\n\n", k, sightcheck_score);
}

void sightcheck_countdown()
{
	sightcheck_start();
	Sleep(1000);
	system("cls");

	sightcheck_rule();
	sightcheck_start();
	printf("★ 생성 3초전...");
	Sleep(1000);
	system("cls");

	sightcheck_rule();
	sightcheck_start();
	printf("★ 생성 2초전...");
	Sleep(1000);
	system("cls");

	sightcheck_rule();
	sightcheck_start();
	printf("★ 생성 1초전...");
	Sleep(1000);
	system("cls");
}

void star_print()
{
	for (l = 1; l <= star_number; l++)
	{
		printf("★");
	}
}

void star_print2()
{
	star_print();
	Sleep(1000);
	system("cls");

	sightcheck_rule();
	sightcheck_start();
	star_print();
	printf("\t제한 시간: 1초");
	Sleep(1000);
	system("cls");

	sightcheck_rule();
	sightcheck_start();
	star_print();
	printf("\t제한 시간: 0초");
	Sleep(1000);
	system("cls");
}

void star_print3()
{
	system("cls");
	sightcheck_rule();
	sightcheck_start();
	printf("★의 개수: ");
	scanf_s("%d", &star_answer);
}

void star_c_answer()
{
	sightcheck_score++;
	system("cls");
	sightcheck_rule();
	sightcheck_start();
	printf("정답입니다!\n");
	printf("Enter를 누르면 다음 게임을 진행합니다.\n\n");
	system("pause");
	system("cls");
}

void star_w_answer()
{
	system("cls");
	sightcheck_rule();
	sightcheck_start();
	printf("틀렸습니다.\n");
	printf("Enter를 누르면 다음 게임을 진행합니다.\n\n");
	system("pause");
	system("cls");
}

void sightcheck_end()
{
	system("cls");
	printf("<<동체시력 측정게임>> 최종결과\n\n");
	printf("최종 점수는 %d점 입니다. 축하드립니다.\n\n", sightcheck_score);
	sightcheck_score = 0;
	system("pause");
	system("cls");
}