//#include <stdio.h>
//#include <stdlib.h>
//#include <time.h>
//
//void func1 (int *A, int size); 
//void func2 (int *A, int size); 
//void func3 (int *A, int *B, int size); 
//void func4 (int *A, int *B, int *C, int size);
//int get_array_sum (int *A, int size); 
//
//int main()
//{
//	int a[10]={1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, b[10]={0,}, c[10], sum;
//
//	printf("(a)\n");
//	func2(b, 10);
//	func1(b, 10);
//
//	printf("(b)\n");
//	func3(a, b, 10);
//	func1(b, 10);
//
//	printf("(c)\n");
//	func2(b, 10);
//	func4(a, b, c, 10);
//	func1(c, 10);
//
//	printf("(d)\n");
//	sum=get_array_sum(a, 10);
//
//	printf("a 원소의 합 : %d\n", sum);
//	sum=get_array_sum(b, 10);
//
//	printf("b 원소의 합 : %d\n", sum);
//	sum=get_array_sum(c, 10);
//
//	printf("c 원소의 합 : %d\n", sum);
//
//	return 0;
//}
//
//void func1 (int *A, int size)
//{
//   int i;
//
//   printf("[ ");
//
//   for(i=0; i<size; i++)
//      printf("%d ", *(A+i));
//
//   printf("]\n");
//}
//
//void func2 (int *A, int size)
//{
//   int i;
//
//   srand((unsigned)time(NULL));
//
//   for(i=0; i<size; i++)
//      *(A+i)=1+rand()%9; 
//}
//
//void func3 (int *A, int *B, int size)
//{
//   int i;
//
//   for(i=0; i<size; i++)
//      *(B+i)=*(A+i);
//}
//
//void func4 (int *A, int *B, int *C, int size)
//{
//   int i;
//
//   for(i=0; i<size; i++)
//      *(C+i)=*(A+i) + *(B+i);
//}
//
// 
//
//int get_array_sum (int *A, int size)
//{
//   int i, sum=0;
//
//   for(i=0; i<size; i++)
//      sum+=*(A+i);
//
//   return sum;
//}