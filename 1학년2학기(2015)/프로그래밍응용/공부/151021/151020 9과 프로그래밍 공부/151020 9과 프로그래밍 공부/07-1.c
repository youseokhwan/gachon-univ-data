//// A[] = "A B C D";
//// B[] = "1 2 3 4";
//// 두 개의 배열을 각각 swap
//
//#include <stdio.h>
//
//void swap (char *pa, char *pb);
//
//int main()
//{
//	int i;
//	char A[] = "ABCD";
//	char B[] = "1234";
//	char *pa = A, *pb = B;
//
//	printf("A = %s\n", A);
//	printf("B = %s\n\n", B);
//	
//	for (i = 0; i < 4; i++)
//		swap (pa+i, pb+i);
//
//	printf("A = %s\n", A);
//	printf("B = %s\n\n", B);
//
//	return 0;
//}
//
//void swap (char *pa, char *pb)
//{
//	char tmp;
//
//	tmp = *pa;
//	*pa = *pb;
//	*pb = tmp;
//}