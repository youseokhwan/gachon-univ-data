///*
//배열 A[5][5]에 1부터 값을 넣고 포인터를 이용하여 대각선의 합을 구하라.
//*/
//
//#include <stdio.h>
//int main()
//{
//	int A[5][5] = {0, };
//	int i, j, num = 1, sum1 = 0, sum2 = 0;
//
//	for (i = 0; i < 5; i++)
//	{
//		for (j = 0; j < 5; j++)
//			A[i][j] = num++;
//	}
//	
//	for (i = 0; i < 5; i++)
//		sum1 += A[i][i];
//
//	for (i = 0, j = 4; i < 5 && 0 <= j < 5; i++, j--)
//		sum2 += A[i][j];
//
//	printf("sum1 = %d\n", sum1);
//	printf("sum2 = %d\n", sum2);
//
//	return 0;
//}