//// 301p 5번
//#include <stdio.h>
//
//int main()
//{
//	int num[3][5] = {{12, 56, 32, 16, 98},
//					{99, 56, 34, 41, 3},
//					{65, 3, 87, 78, 21}};
//	int i, j, sum;
//
//	for (i = 0; i < 5; i++)
//	{
//		sum = 0;
//
//		printf("%d열의 합: ", i+1);
//		for (j = 0; j < 3; j++)
//			sum += num[j][i];
//		printf("%d\n", sum);
//	}
//
//	printf("\n");
//
//	for (i = 0; i < 3; i++)
//	{
//		sum = 0;
//
//		printf("%d행의 합: ", i+1);
//		for (j = 0; j < 5; j++)
//			sum += num[i][j];
//		printf("%d\n", sum);
//	}
//
//	return 0;
//}