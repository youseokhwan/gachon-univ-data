//#include<stdio.h>
//#include<stdlib.h>
//#include<time.h>
//
//int main(void)
//{
//	int com_num, user_num;
//
//	printf("1. 가위\n");
//	printf("2. 바위\n");
//	printf("3. 보\n");
//	printf("가위, 바위, 보 선택(숫자): ");
//	scanf("%d", &user_num);
//
//	com_num = ((rand() * time(NULL)) % 3) + 1;
//
//	if(com_num == user_num)
//		printf("무승부입니다.\n");
//	if(com_num == 1 && user_num == 2)
//		printf("승리입니다.\n");
//	if(com_num == 1 && user_num == 3)
//		printf("패배입니다.\n");
//	if(com_num == 2 && user_num == 1)
//		printf("패배입니다.\n");
//	if(com_num == 2 && user_num == 3)
//		printf("승리입니다.\n");
//	if(com_num == 3 && user_num == 1)
//		printf("승리입니다.\n");
//	if(com_num == 3 && user_num == 2)
//		printf("패배입니다.\n");
//
//	return 0;
//}