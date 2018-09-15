///*
//A[] = "A B C D"
//B[] = "1 2 3 4"
//두 개의 배열을 각각 swap.
//<출력>
//A = 1 2 3 4
//B = A B C D
//*/
//
//#include <stdio.h>
//void swap (char *a, char *b)
//{
//	char temp = *a;
//	*a = *b;
//	*b = temp;
//}
//
//int main()
//{
//	int i;
//	char A[] = {'A','B','C','D','\0'};
//	char B[] = {'1','2','3','4','\0'}; //\0는 NULL, char형 배열에서 {}로 선언할때에는 무조건 써줘야함
//	// char A[]= "ABCD" 라고쓰면 더 편함. " ' 주의
//
//	printf("A = {%s}\n", A);
//	printf("B = {%s}\n\n", B);
//
//	for(i = 0; i < 4; i++)
//	{
//		char *ap = &A[i];
//		char *bp = &B[i];
//		swap (ap, bp);
//	}
//
//	printf("스왑 후\n\nA = {%s}\n", A);
//	printf("B = {%s}\n", B);
//
//	return 0;
//}