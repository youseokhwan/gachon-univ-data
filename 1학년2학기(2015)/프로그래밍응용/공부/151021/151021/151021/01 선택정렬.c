//#include <stdio.h>
//
//int main()
//{
//	int A[] = {1, 3, 5, 6, 8, 2, 4, 7, 9, 0};
//	int i, j, min=0, temp;
//
//	for (i = 0; i < 9; i++)
//	{
//		min = i;
//
//		for (j = i+1; j < 10; j++)
//		{
//			if (A[j] < A[min])
//				min = j;
//		}
//
//		temp = A[i];
//		A[i] = A[min];
//		A[min] = temp;
//	}
//
//	for (i = 0; i < 10; i++)
//		printf("%d ", A[i]);
//
//	printf("\n");
//
//	return 0;
//}