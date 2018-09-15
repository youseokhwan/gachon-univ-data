////301p 6번
//#include <stdio.h>
//
//int main()
//{
//	int binary[64] = {0};
//	int i, num;
//
//	printf("10진수 입력: ");
//	scanf("%d", &num);
//
//	for (i = 0; i < 64 && num > 0; i++)
//	{
//		binary[i] = num % 2;
//		num = num / 2;
//	}
//
//	printf("2진수: ");
//
//	for (i = 63; i >= 0; i--)
//		printf("%d", binary[i]);
//
//	printf("\n");
//
//	return 0;
//}