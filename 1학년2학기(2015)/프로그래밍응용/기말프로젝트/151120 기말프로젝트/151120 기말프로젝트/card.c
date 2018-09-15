#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <Windows.h>
#include <string.h>

#define PRODUCTIONMODE // 프로덕션모드 실행 시 주석 해제
//#define TESTMODE // 테스트모드 실행 시 주석 해제 (디버깅)

// 메뉴, 룰 등
void menu();
void rules();

void present_money(); // 돈 표시하는 함수

// 승리 시 출력함수
void com_win();
void com_win2();
void user_win();
void user_win2();

// 컴퓨터 족보계산 함수
void st_flush_c();
void fourcard_c();
void fullhouse_c();
void flush_c();
void straight_c();
void triple_c();
void two_pair_c();
void one_pair_c();
void high_card_c();

// 유저 족보계산 함수
void st_flush_u();
void fourcard_u();
void fullhouse_u();
void flush_u();
void straight_u();
void triple_u();
void two_pair_u();
void one_pair_u();
void high_card_u();

char *card[4][13] = { "♤A", "♤2", "♤3", "♤4", "♤5", "♤6", "♤7", "♤8", "♤9", "♤10", "♤J", "♤Q", "♤K"
					,"◇A", "◇2", "◇3", "◇4", "◇5", "◇6", "◇7", "◇8", "◇9", "◇10", "◇J", "◇Q", "◇K"
					,"♡A", "♡2", "♡3", "♡4", "♡5", "♡6", "♡7", "♡8", "♡9", "♡10", "♡J", "♡Q", "♡K"
					,"♧A", "♧2", "♧3", "♧4", "♧5", "♧6", "♧7", "♧8", "♧9", "♧10", "♧J", "♧Q", "♧K" };
int com_money = 10, user_money = 10, match_money = 0; // 컴퓨터, 유저의 소지금액 및 판돈
double com_comp = 0.0, user_comp = 0.0; // 족보를 비교하기 위한 임시 변수

int *handcard[10]; // 0~4는 컴퓨터의 패, 5~9는 유저의 패
int *handcard2[5]; // 유저의 패 따로 분리
int *check[10] = { NULL }; // check 배열은 카드가 중복되지않기 위해 사용

char treename_com[100] = { NULL }; // 컴퓨터의 족보의 이름을 저장하는 배열
char treename_user[100] = { NULL }; // 유저의 족보의 이름을 저장하는 배열

int main(void)
{
#ifdef TESTMODE
	system("color 0E");
#endif

	srand((unsigned)time(NULL)); // 난수 배치

#ifdef TESTMODE
	int k;

	for (k = 0; k < 52; k++)
		printf("%s %d\n", *(card[0] + k), card[0][0] + k); // 전체 카드 및 각각 주소 출력
	printf("테스트 모드입니다.\n");
	system("pause");
#endif

	int menu_select, game_stacks = 0, card_select, temp, bet_select; //menu_select는 메뉴 선택, gamestacks는 판수, card_select는 공개카드 선택, bet_select는 베팅 여부
	int i, l, m, n, o; // for문에 사용하는 변수
	
	menu(); // 메뉴 출력 (게임 시작 or 종료)
	scanf("%d", &menu_select); // menu_select 입력받음

	if (menu_select == 2) // 2. 종료를 선택하면 프로그램 종료
	{
		printf("\n종료합니다.\n\n");
		exit(0); // 정상적으로 종료
	}
	else if (menu_select != 1 && menu_select != 2) // 1, 2 이외의 선택 시 오류메시지 출력 및 프로그램 종료
	{
		printf("\n잘못된 입력입니다.\n\n");
		exit(1); // 비정상적으로 종료
	}

	rules(); // 룰 및 족보 출력

	while (1)
	{
		game_stacks++; // 판수 증가

		if (com_money <= 0) // 컴퓨터의 돈이 0원이 되면 유저의 승리로 종료
		{
			system("cls");
			for (i = 0; i < 2; i++)
			{
				user_win();
				Sleep(500);
				user_win2();
				Sleep(500);
			}

			exit(0); // 정상적인 종료
		}

		if (user_money <= 0) // 유저의 돈이 0원이 되면 컴퓨터의 승리로 종료
		{
			system("cls");
			for (i = 0; i < 2; i++)
			{
				com_win();
				Sleep(500);
				com_win2();
				Sleep(500);
			}

			exit(0); // 정상적인 종료
		}

		system("cls"); // 콘솔화면 초기화
		printf("Game %d\n", game_stacks); // 현재 몇 판 했는지 표시

		present_money(); // 현재 컴퓨터와 유저가 가진 돈을 표시

#ifdef PRODUCTIONMODE
		for (l = 0; l < 5; l++) // computer 배열에 card의 원소들 난수로 배치
		{
			handcard[l] = &card[0][0] + rand() % 52; // 컴퓨터 패 난수 배치
			for (n = 0; n < l; n++)
			{
				if (handcard[l] == check[n])
				{
					l--;
					break;
				}
			}

			check[l] = handcard[l]; // 중복 방지하기위한 check 배열에 복사
		}

		for (l = 0; l < 5; l++) // user 배열에 card의 원소들 난수로 배치
		{
			handcard[l + 5] = &card[0][0] + rand() % 52; // 유저 패 난수 배치

			for (n = 0; n < 10; n++) // 중복되는지 검사하고 중복되면 l--
			{
				if (handcard[l + 5] == check[n])
				{
					l--;
					break;
				}
			}

			check[l + 5] = handcard[l + 5]; // 중복을 방지하기위한 check 배열에 유저 패 복사
		}
#endif

#ifdef TESTMODE
		// 카드 배치 임의로 테스트
		handcard[0] = &card[0][1];
		handcard[1] = &card[1][1];
		handcard[2] = &card[2][1];
		handcard[3] = &card[3][1];
		handcard[4] = &card[0][4];

		handcard[5] = &card[3][3];
		handcard[6] = &card[3][2];
		handcard[7] = &card[3][7];
		handcard[8] = &card[3][11];
		handcard[9] = &card[3][6];
#endif

		for (o = 0; o < 5; o++)
		{
			handcard2[o] = handcard[o + 5]; // 계산을 편리하게 하기 위해 컴퓨터, 유저의 패 각각 배열로 분리
		}

		printf("판돈으로 1원 지불\n\n"); // 판돈 1원씩 지불

		if (com_money <= 0)
		{
			com_money = 0;
			user_money--;
			match_money++;
		}
		else if (user_money <= 0)
		{
			com_money--;
			user_money = 0;
			match_money++;
		}
		else
		{
			com_money--;
			user_money--;
			match_money += 2;
		}

		system("pause");

		system("cls");

		printf("Game %d\n", game_stacks); // 현재 몇 판 했는지 표시
		present_money(); // 현재 컴퓨터와 유저가 가진 돈을 표시

		printf("컴퓨터의 패: (??) (??) %s\n", *handcard[2]);
		printf("유저의 패: (%s) (%s) %s\n\n", *handcard2[0], *handcard2[1], *handcard2[2]);

		printf("1. 베팅(1원 차감)\n");
		printf("2. 드롭(기권)\n\n");

		printf("선택(잘못된 입력 시 기권): ");
		scanf("%d", &bet_select);

		if (bet_select == 2 || bet_select != 1) // 1이 아닌 다른 것을 선택했을 경우
		{
			printf("\n기권. 컴퓨터 승리\n");
			com_money = com_money + match_money;
			match_money = 0;

			system("pause");
		}
		else
		{
			if (com_money <= 0) // 돈이 0원 미만이 될 수 없으므로 0원으로 유지
			{
				com_money = 0;
				user_money--;
				match_money++;
			}
			else if (user_money <= 0) // 돈이 0원 미만이 될 수 없으므로 0원으로 유지
			{
				com_money--;
				user_money = 0;
				match_money++;
			}
			else
			{
				com_money--;
				user_money--;
				match_money += 2;
			}

			system("cls");

			printf("Game %d\n", game_stacks); // 현재 몇 판 했는지 표시
			present_money(); // 현재 컴퓨터와 유저가 가진 돈을 표시

			printf("컴퓨터의 패: (??) (??) %s %s\n", *handcard[2], *handcard[3]); // ()는 비공개 패
			printf("유저의 패: (%s) (%s) %s %s\n\n", *handcard2[0], *handcard2[1], *handcard2[2], *handcard2[3]);

			printf("1. 베팅(1원 차감)\n");
			printf("2. 드롭(기권)\n\n");

			printf("선택(잘못된 입력 시 기권): ");
			scanf("%d", &bet_select);

			if (bet_select == 2 || bet_select != 1) // 2가 아닌 것을 선택했을 시 기권
			{
				printf("\n기권. 컴퓨터 승리\n");
				com_money = com_money + match_money;
				match_money = 0;

				system("pause");
			}
			else
			{
				if (com_money <= 0) // 돈이 0원 미만이 될 필요가 없으므로 0원으로 유지
				{
					com_money = 0;
					user_money--;
					match_money++;
				}
				else if (user_money <= 0) // 돈이 0원 미만이 될 필요가 없으므로 0원으로 유지
				{
					com_money--;
					user_money = 0;
					match_money++;
				}
				else
				{
					com_money--;
					user_money--;
					match_money += 2;
				}

				system("cls");

				printf("Game %d\n", game_stacks); // 현재 몇 판 했는지 표시
				present_money(); // 현재 컴퓨터와 유저가 가진 돈을 표시

				printf("컴퓨터의 패: (??) (??) %s %s (??)\n", *handcard[2], *handcard[3]); // ()는 비공개 패
				printf("유저의 패: (%s) (%s) %s %s (%s)\n\n", *handcard2[0], *handcard2[1], *handcard2[2], *handcard2[3], *handcard2[4]);

				printf("1. 진행\n");
				printf("2. 드롭(기권)\n\n");

				printf("선택(잘못된 입력 시 기권): ");
				scanf("%d", &bet_select);

				if (bet_select == 2 || bet_select != 1) // 2가 아닌 것을 선택 시 기권
				{
					printf("\n기권. 컴퓨터 승리\n");
					com_money += match_money;
					match_money = 0;

					system("pause");
				}

				else
				{
					high_card_c(); // 컴퓨터 족보 계산
					one_pair_c();
					two_pair_c();
					triple_c();
					straight_c();
					flush_c();
					fullhouse_c();
					fourcard_c();
					st_flush_c();

					high_card_u(); // 유저 족보 계산
					one_pair_u();
					two_pair_u();
					triple_u();
					straight_u();
					flush_u();
					fullhouse_u();
					fourcard_u();
					st_flush_u();

					system("cls");
					printf("Game %d\n", game_stacks); // 현재 몇 판 했는지 표시
					present_money(); // 현재 컴퓨터와 유저가 가진 돈을 표시

					printf("<결과>\n\n");

					if (com_comp > user_comp)
					{
						printf("컴퓨터의 승리입니다.\n\n");
						com_money += match_money;
						match_money = 0;
					}
					else
					{
						printf("유저의 승리입니다.\n\n");
						user_money += match_money;
						match_money = 0;
					}

					printf("컴퓨터의 패: "); // 컴퓨터의 패 출력
					for (m = 0; m < 5; m++)
						printf("%s ", *handcard[m]);

#ifdef TESTMODE
					printf("\t%.2lf\t", com_comp);
#endif

					printf("\t  %s\n", treename_com);

					printf("  유저의 패: "); // 유저의 패 출력
					for (m = 0; m < 5; m++)
						printf("%s ", *handcard[m + 5]);

#ifdef TESTMODE
					printf("\t%.2lf\t", user_comp);
#endif

					printf("\t  %s\n", treename_user);

					printf("\n");

					system("pause");
				}
			}
		}
	}

	return 0;
}

void st_flush_c() // 스트레이트플러쉬인지 검사하는 함수
{
	int stacks = 0, max, i;

	max = handcard[0];

	for (i = 0; i < 5; i++)
	{
		if (handcard[i] > max)
			max = handcard[i];
	}

	for (i = 0; i < 5; i++)
	{
		if (handcard[i] == max - 4)
			stacks++;
		if (handcard[i] == max - 8)
			stacks++;
		if (handcard[i] == max - 12)
			stacks++;
		if (handcard[i] == max - 16)
			stacks++;
	}

	if (stacks == 4)
	{
		com_comp = 8.0;
		strcpy(treename_com, "Straight Flush");
	}
}

void st_flush_u() // 스트레이트플러쉬인지 검사하는 함수
{
	int stacks = 0, max, i;

	max = handcard2[0];

	for (i = 0; i < 5; i++)
	{
		if (handcard2[i] > max)
			max = handcard2[i];
	}

	for (i = 0; i < 5; i++)
	{
		if (handcard2[i] == max - 4)
			stacks++;
		if (handcard2[i] == max - 8)
			stacks++;
		if (handcard2[i] == max - 12)
			stacks++;
		if (handcard2[i] == max - 16)
			stacks++;
	}

	if (stacks == 4)
	{
		user_comp = 8.0;
		strcpy(treename_user, "Straight Flush");
	}
}

void fourcard_c() // 포카드인지 검사하는 함수
{
	int stacks = 0, i, j;

	for (i = 0; i < 4; i++)
	{
		for (j = 4; j > i; j--)
		{
			if ((handcard[i] - handcard[j]) % 13 == 0)
				stacks++;
		}
	}
	
	if (stacks == 6)
	{
		com_comp = 7.0;
		strcpy(treename_com, "Four Of A Kind");
	}
}

void fourcard_u() // 포카드인지 검사하는 함수
{
	int stacks = 0, i, j;

	for (i = 0; i < 4; i++)
	{
		for (j = 4; j > i; j--)
		{
			if ((handcard2[i] - handcard2[j]) % 13 == 0)
				stacks++;
		}
	}

	if (stacks == 6)
	{
		user_comp = 7.0;
		strcpy(treename_user, "Four Of A Kind");
	}
}

void fullhouse_c() // 풀하우스인지 검사하는 함수
{
	int stacks = 0, i, j;

	for (i = 0; i < 4; i++)
	{
		for (j = 4; j > i; j--)
		{
			if ((handcard[i] - handcard[j]) % 13 == 0)
				stacks++;
		}
	}

	if (stacks == 4)
	{
		com_comp = 6.0;
		strcpy(treename_com, "Fullhouse");
	}
}

void fullhouse_u() // 풀하우스인지 검사하는 함수
{
	int stacks = 0, i, j;

	for (i = 0; i < 4; i++)
	{
		for (j = 4; j > i; j--)
		{
			if ((handcard2[i] - handcard2[j]) % 13 == 0)
				stacks++;
		}
	}

	if (stacks == 4)
	{
		user_comp = 6.0;
		strcpy(treename_user, "Fullhouse");
	}
}

void flush_c() // 플러쉬인지 검사하는 함수
{
	int stacks = 0, i, j;

	for (i = 0; i < 4; i++)
	{
		if (handcard[0] >= &card[i][0] && handcard[0] <= &card[i][13])
		{
			for (j = 1; j < 5; j++)
			{
				if (handcard[j] >= &card[i][0] && handcard[j] <= &card[i][13])
					stacks++;
			}
		}
	}

	if (stacks == 4)
	{
		com_comp = 5.0;
		strcpy(treename_com, "Flush");
	}
}

void flush_u() // 플러쉬인지 검사하는 함수
{
	int stacks = 0, i, j, max;

	for (i = 0; i < 4; i++)
	{
		if (handcard2[0] >= &card[i][0] && handcard2[0] <= &card[i][13])
		{
			for (j = 1; j < 5; j++)
			{
				if (handcard2[j] >= &card[i][0] && handcard2[j] <= &card[i][13])
					stacks++;
			}
		}
	}

	if (stacks == 4)
	{
		user_comp = 5.0;
		strcpy(treename_user, "Flush");
	}
}

void straight_c() // 스트레이트인지를 검사하는 함수
{
	int stacks[5] = { 0 };
	int i, j, max, stack2 = 0;
	int clipboard[5] = { NULL };
	int a, b;

	for (i = 0; i < 5; i++)
	{
		for (j = 0; j < 4; j++)
		{
			if (handcard[i] >= &card[j][0] && handcard[i] <= &card[j][13])
			{
				a = handcard[i];
				b = &card[j][0];
				clipboard[i] = a - b;
			}
		}
	}

	max = clipboard[0];
	for (i = 1; i < 5; i++)
	{
		if (clipboard[i] > max)
			max = clipboard[i];
	}

	for (i = 0; i < 5; i++)
	{
		if (clipboard[i] == max)
			stacks[0]++;
		if (clipboard[i] == max - 4)
			stacks[1]++;
		if (clipboard[i] == max - 8)
			stacks[2]++;
		if (clipboard[i] == max - 12)
			stacks[3]++;
		if (clipboard[i] == max - 16)
			stacks[4]++;
	}

	for (i = 0; i < 5; i++)
		if (stacks[i] >= 1)
			stack2++;

	if (stack2 == 5)
	{
		com_comp = 4.0;
		strcpy(treename_com, "Straight");
	}
}

void straight_u() // 스트레이트인지를 검사하는 함수
{
	int stacks[5] = { 0 };
	int i, j, max, stack2 = 0;
	int clipboard[5] = { NULL };
	int a, b;

	for (i = 0; i < 5; i++)
	{
		for (j = 0; j < 4; j++)
		{
			if (handcard2[i] >= &card[j][0] && handcard2[i] <= &card[j][13])
			{
				a = handcard2[i];
				b = &card[j][0];
				clipboard[i] = a - b;
			}
		}
	}

	max = clipboard[0];
	for (i = 1; i < 5; i++)
	{
		if (clipboard[i] > max)
			max = clipboard[i];
	}

	for (i = 0; i < 5; i++)
	{
		if (clipboard[i] == max)
			stacks[0]++;
		if (clipboard[i] == max - 4)
			stacks[1]++;
		if (clipboard[i] == max - 8)
			stacks[2]++;
		if (clipboard[i] == max - 12)
			stacks[3]++;
		if (clipboard[i] == max - 16)
			stacks[4]++;
	}

	for (i = 0; i < 5; i++)
		if (stacks[i] >= 1)
			stack2++;

	if (stack2 == 5)
	{
		user_comp = 4.0;
		strcpy(treename_user, "Straight");
	}
}

void triple_c() // 트리플인지 검사하는 함수
{
	int stacks = 0, i, j;
	int a, b, clipboard;

	for (i = 0; i < 4; i++)
	{
		for (j = 4; j > i; j--)
		{
			if ((handcard[i] - handcard[j]) % 13 == 0)
			{
				stacks++;
				a = handcard[i];
				b = &card[0][0];
				clipboard = a - b;
			}
		}
	}

	if (stacks == 3)
	{
		if (clipboard % 52 == 0)
			com_comp = 3.13;
		else
			for (i = 1; i < 13; i++)
			{
				if (clipboard % 52 == (i * 4))
					com_comp = 3.00 + (i * 0.01);
			}

		strcpy(treename_com, "Triple");
	}
}

void triple_u() // 트리플인지 검사하는 함수
{
	int stacks = 0, i, j;
	int a, b, clipboard;

	for (i = 0; i < 4; i++)
	{
		for (j = 4; j > i; j--)
		{
			if ((handcard2[i] - handcard2[j]) % 13 == 0)
			{
				stacks++;
				a = handcard2[i];
				b = &card[0][0];
				clipboard = a - b;
			}
		}
	}

	if (stacks == 3)
	{
		if (clipboard % 52 == 0)
			user_comp = 3.13;
		else
			for (i = 1; i < 13; i++)
			{
				if (clipboard % 52 == (i * 4))
					user_comp = 3.00 + (i * 0.01);
			}

		strcpy(treename_user, "Triple");
	}
}

void two_pair_c() // 투페어인지 검사하는 함수
{
	int stacks = 0, i, j;

	for (i = 0; i < 4; i++)
	{
		for (j = 4; j > i; j--)
		{
			if ((handcard[i] - handcard[j]) % 13 == 0)
				stacks++;
		}
	}

	if (stacks == 2)
	{
		com_comp = 2.0;
		strcpy(treename_com, "Two Pair");
	}
}

void two_pair_u() // 투페어인지 검사하는 함수
{
	int stacks = 0, i, j;

	for (i = 0; i < 4; i++)
	{
		for (j = 4; j > i; j--)
		{
			if ((handcard2[i] - handcard2[j]) % 13 == 0)
				stacks++;
		}
	}

	if (stacks == 2)
	{
		user_comp = 2.0;
		strcpy(treename_user, "Two Pair");
	}
}

void one_pair_c() // 원페어인지 검사하는 함수
{
	int stacks = 0, i, j;
	int a, b, clipboard;

	for (i = 0; i < 4; i++)
	{
		for (j = 4; j > i; j--)
		{
			if ((handcard[i] - handcard[j]) % 13 == 0)
			{
				stacks++;
				a = handcard[i];
				b = &card[0][0];
				clipboard = a - b;
			}
		}
	}

	if (stacks == 1)
	{
		if (clipboard % 52 == 0)
			com_comp = 1.13;
		else
			for (i = 1; i < 13; i++)
			{
				if (clipboard % 52 == (i * 4))
					com_comp = 1.00 + (i * 0.01);
			}

		strcpy(treename_com, "One Pair");
	}
}

void one_pair_u() // 원페어인지 검사하는 함수
{
	int stacks = 0, i, j;
	int a, b, clipboard;

	for (i = 0; i < 4; i++)
	{
		for (j = 4; j > i; j--)
		{
			if ((handcard2[i] - handcard2[j]) % 13 == 0)
			{
				stacks++;
				a = handcard2[i];
				b = &card[0][0];
				clipboard = a - b;
			}
		}
	}

	if (stacks == 1)
	{
		if (clipboard % 52 == 0)
			user_comp = 1.13;
		else
			for (i = 1; i < 13; i++)
			{
				if (clipboard % 52 == (i * 4))
					user_comp = 1.00 + (i * 0.01);
			}

		strcpy(treename_user, "One Pair");
	}
}

void high_card_c() // 더 높은 하이카드를 찾는 함수
{
	int i, j, k;
	double tree_comp = 0.0;

	for (k = 1; k < 13; k++)
	{
		for (j = 3; j >= 0; j--)
		{
			tree_comp += 0.01;
			for (i = 0; i < 5; i++)
			{
				if (handcard[i] == &card[j][k])
					com_comp = tree_comp;
			}
		}

		for (j = 3; j >= 0; j--)
		{
			tree_comp += 0.01;
			for (i = 0; i < 5; i++)
			{
				if (handcard[i] == &card[j][0])
					com_comp = tree_comp;
			}
		}
	}

	strcpy(treename_com, "High Card");
}

void high_card_u() // 더 높은 하이카드를 찾는 함수
{
	int i, j, k;
	double tree_comp = 0.0;

	for (k = 1; k < 13; k++)
	{
		for (j = 3; j >= 0; j--)
		{
			tree_comp += 0.01;
			for (i = 0; i < 5; i++)
			{
				if (handcard2[i] == &card[j][k])
					user_comp = tree_comp;
			}
		}

		for (j = 3; j >= 0; j--)
		{
			tree_comp += 0.01;
			for (i = 0; i < 5; i++)
			{
				if (handcard2[i] == &card[j][0])
					user_comp = tree_comp;
			}
		}
	}

	strcpy(treename_user, "High Card");
}

void menu() // 메뉴 출력하는 함수
{
	int select;

	system("cls");
	printf("■□■□■□■□■□■□■\n");
	printf("□\t\t\t□\n");
	printf("■      <<POKER>>       ■\n");
	printf("□\t\t\t□\n");
	printf("■□■□■□■□■□■□■\n\n");
	printf("1. 게임 시작\n");
	printf("2. 종료\n\n");
	printf("선택: ");
}

void rules() // 룰 출력하는 함수
{
	system("cls");
	printf("<<Rules>>\n");
	printf("■ 5장씩 받아서 더 높은 족보를 가지면 승리합니다.\n");
	printf("□ 판돈(1원)을 걸고 참여하며, 3장을 받습니다.\n");
	printf("■ 패를 받기 전 베팅을 해야하며, 드롭하고 기권할 수 있습니다.\n");
	printf("□ 베팅은 총 3번 진행하며, 판돈을 내지 못할 때(파산할 때) 패배합니다.\n\n");
	printf("\t\t족보\t\t\t예시\n");
	printf("\t  스트레이트플러쉬\t♤9 ♤8 ♤7 ♤6 ♤5\n");
	printf("\t       포카드\t\t♤8 ◇8 ♡8 ♧8\n");
	printf("\t      풀하우스\t\t♤8 ◇8 ♡8 ♧2 ♤2\n");
	printf("\t     스트레이트\t\t♤8 ◇7 ♡6 ♧5 ♧4\n");
	printf("\t       트리플\t\t♤8 ◇8 ♡8\n");
	printf("\t       투페어\t\t♤8 ◇8 ♡6 ♧6\n");
	printf("\t       원페어\t\t♤8 ◇8\n");
	printf("\t         탑\t\t♤8\n\n");
	system("pause");
}

void present_money() // 현재 컴퓨터, 유저 돈과 그 판의 판돈을 출력해주는 함수
{
	printf("컴퓨터 돈: %d\t\t유저 돈: %d\t\t판돈: %d\n\n", com_money, user_money, match_money);
}

void com_win()
{
	system("cls");
	printf("■□■□■□■□■□■□■\n");
	printf("□\t\t\t□\n");
	printf("■    COMPUTER WIN!!    ■\n");
	printf("□\t\t\t□\n");
	printf("■□■□■□■□■□■□■\n\n");
	system("color 0E");
}

void com_win2()
{
	system("cls");
	printf("□■□■□■□■□■□■□\n");
	printf("■\t\t\t■\n");
	printf("□     컴퓨터 승리!     □\n");
	printf("■\t\t\t■\n");
	printf("□■□■□■□■□■□■□\n\n");
	system("color 0F");
}

void user_win()
{
	system("cls");
	printf("■□■□■□■□■□■□■\n");
	printf("□\t\t\t□\n");
	printf("■      USER WIN!!      ■\n");
	printf("□\t\t\t□\n");
	printf("■□■□■□■□■□■□■\n\n");
	system("color 0E");
}

void user_win2()
{
	system("cls");
	printf("□■□■□■□■□■□■□\n");
	printf("■\t\t\t■\n");
	printf("□      유저 승리!      □\n");
	printf("■\t\t\t■\n");
	printf("□■□■□■□■□■□■□\n\n");
	system("color 0F");
}