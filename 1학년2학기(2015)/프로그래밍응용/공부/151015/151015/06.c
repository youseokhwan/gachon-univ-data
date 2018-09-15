//// 선택정렬
//#include <stdio.h>
//#define SIZE 10
//
//int main()
//{
//	int list[SIZE] = {6, 7, 1, 2, 8, 3, 0, 9, 4, 5};
//	int i, j, min, temp;
//
//	for (i = 0; i < SIZE-1; i++)
//	{
//		min = i;
//
//		for (j = i+1; j < SIZE; j++)
//		{
//			if (list[j] < list[min])
//				min = j;
//		}
//
//		temp = list[min];
//		list[min] = list[i];
//		list[i] = temp;
//	}
//
//	for (i = 0; i < SIZE; i++)
//	{
//		printf("%d ", list[i]);
//	}
//
//	printf("\n");
//
//	return 0;
//}