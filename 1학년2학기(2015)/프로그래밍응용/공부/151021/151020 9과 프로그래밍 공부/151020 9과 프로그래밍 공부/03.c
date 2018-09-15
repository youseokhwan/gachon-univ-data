//#include <stdio.h>
//
//void get(int num1, int num2, int *G);
//
//int main()
//{
//	int num1, num2, L, G;
//
//	printf("정수 2개 입력: ");
//	scanf("%d %d", &num1, &num2);
//
//	get(num1, num2, &G);
//	L = (num1 * num2) / G;
//
//	printf("최대 공약수: %d\n", G);
//	printf("최소 공배수: %d\n", L);
//
//	return 0;
//}
//
//void get(int num1, int num2, int *G)
//{
//	int r, temp;
//
//	if (num2 > num1)
//	{
//		temp = num1;
//		num1 = num2;
//		num2 = temp;
//	}
//
//	while (1)
//	{
//		if (num2 == 0)
//		{
//			*G = num1;
//			break;
//		}
//		else
//		{
//			r = num1 % num2;
//			num1 = num2;
//			num2 = r;
//		}
//	}
//}