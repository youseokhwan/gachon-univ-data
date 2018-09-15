////302p 8번
//#include <stdio.h>
//#include <Windows.h>
//#define SIZE 10
//
//void menu();
//
//int main()
//{
//	int user_select, i, user_num;
//	int seat_num[SIZE] = {0, };
//
//	printf("좌석을 예약하시겠습니까? (1 또는 0) ");
//	scanf("%d", &user_select);
//
//	while (1)
//	{
//		if (user_select == 0)
//		{
//			printf("종료합니다.\n");
//			break;
//		}
//		else
//		{
//			menu();
//
//			for (i = 0; i < SIZE; i++)
//			{
//				printf("%d ", seat_num[i]);
//			}
//			printf("\n");
//
//			printf("\n몇 번째 좌석을 예약하시겠습니까? ");
//			scanf("%d", &user_num);
//
//			if (seat_num[user_num - 1] == 0)
//			{
//				seat_num[user_num - 1] += 1;
//				printf("\n예약되었습니다.\n");
//				system("pause");
//			}
//			else
//			{
//				printf("\n이미 예약된 좌석입니다.\n");
//				system("pause");
//			}
//			
//			for (i = 0; i < SIZE; i++)
//			{
//				printf("%d ", seat_num[i]);
//			}
//		}
//	}
//
//	return 0;
//}
//
//void menu()
//{
//	int i;
//
//	system("cls");
//	printf("현재의 예약 상태는 다음과 같습니다.\n");
//	printf("--------------------\n");
//	printf("1 2 3 4 5 6 7 8 9 10\n");
//	printf("--------------------\n");
//}