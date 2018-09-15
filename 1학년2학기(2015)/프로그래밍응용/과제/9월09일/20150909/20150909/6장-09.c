//#include <stdio.h>
//
//int main(void)
//{
//	int user_number, a, b;
//
//	do
//	{
//		printf("************\n");
//		printf("1---Add\n");
//		printf("2---Subtract\n");
//		printf("3---Multiply\n");
//		printf("4---Divide\n");
//		printf("5---Quit\n");
//		printf("************\n");
//		printf("연산을 선택하시요: ");
//		scanf("%d", &user_number);
//	
//		if (user_number == 5)
//			break;
//		else if (user_number == 1)
//		{
//			printf("두 수를 공백으로 분리하여 입력하시요: ");
//			scanf("%d %d", &a, &b);
//
//			printf("%d\n", a + b);
//		}
//		else if (user_number == 2)
//		{
//			printf("두 수를 공백으로 분리하여 입력하시요: ");
//			scanf("%d %d", &a, &b);
//
//			printf("%d\n", a - b);
//		}
//		else if (user_number == 3)
//		{
//			printf("두 수를 공백으로 분리하여 입력하시요: ");
//			scanf("%d %d", &a, &b);
//
//			printf("%d\n", a * b);
//		}
//		else if (user_number == 4)
//		{
//			printf("두 수를 공백으로 분리하여 입력하시요: ");
//			scanf("%d %d", &a, &b);
//
//			printf("%d\n", a / b);
//		}
//
//	} while (user_number != 5);
//
//	return 0;
//}