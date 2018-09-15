//#include <stdio.h>
//#include <stdlib.h>
//#include <time.h>
//
//void print_array (int *A, int size);
//void fill_array (int *A, int size);
//void copy_array (int *A, int *B, int size);
//
//int main()
//{
//	int a[10] = {0};
//	int b[10];
//
//	srand((unsigned)time(NULL));
//
//	fill_array (a, 10);
//	print_array (a, 10);
//	copy_array (a, b, 10);
//
//	return 0;
//}
//
//void print_array (int *A, int size)
//{
//	int i;
//
//	printf("[");
//	for (i = 0; i < size; i++)
//		printf("%d ", *(A+i));
//	printf("]");
//}
//
//void fill_array (int *A, int size)
//{
//	int i;
//
//	for (i = 0; i < size; i++)
//		*(A+i) = rand()%10;
//}
//
//void copy_array (int *A, int *B, int size)
//{
//	int i;
//
//	for (i = 0; i < size; i++)
//		B[i] = A[i];
//}