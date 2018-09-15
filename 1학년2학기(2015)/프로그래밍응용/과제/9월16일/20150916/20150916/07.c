//#include <stdio.h>
//#include <stdlib.h>
//#include <time.h>
//int rand_num();
//int main (void)
//{
//	int game_num, i, com_num, user_select, count_win = 0, count_lose = 0;
//
//	printf("게임을 몇번하시겠습니까? ");
//	scanf("%d", &game_num);
//
//	for (i = 1; i <= game_num; i++)
//	{
//		printf("1. 앞\n");
//		printf("2. 뒤\n");
//		printf("선택: ");
//		scanf("%d", &user_select);
//
//		com_num = rand_num();
//
//		if (com_num == user_select)
//		{
//			printf("정답입니다.\n");
//			count_win++;
//		}
//		else
//		{
//			printf("오답입니다.\n");
//			count_lose++;
//		}
//	}
//	
//	printf("승리: %d, 패배: %d\n", count_win, count_lose);
//
//	return 0;
//}
//
//int rand_num()
//{
//	int i;
//
//	i = ((rand()%2) * time(NULL)) + 1;
//
//	return i;
//}