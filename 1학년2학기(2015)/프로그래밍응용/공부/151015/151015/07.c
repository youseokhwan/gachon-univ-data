//// 버블정렬
//#include <stdio.h>
//#define SIZE 10
//
//int main()
//{
//	int list[SIZE] = {1, 3, 5, 7, 9, 0, 2, 4, 6, 8};
//	int i, j, temp;
//
//	for (i = 0; i < SIZE-1; i++)
//	{
//		for (j = 0; j < SIZE-1; j++)
//		{
//			if (list[j] > list[j+1])
//			{
//				temp = list[j];
//				list[j] = list[j+1];
//				list[j+1] = temp;
//			}
//		}
//	}
//
//	for (i = 0; i < SIZE; i++)
//		printf("%d ", list[i]);
//
//	return 0;
//}