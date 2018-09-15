//#include <stdio.h>
//
//int check (int A[], int size);
//
//int main ()
//{
//	int i;
//	int isbn[13] = {0};
//
//	printf("ISBN 입력: ");
//	for (i = 0; i < 13; i++)
//		scanf("%d", &isbn[i]);
//
//	if (check (isbn, 13) == 1)
//		printf("정상\n");
//	else
//		printf("오류\n");
//
//	return 0;
//}
//
//int check (int A[], int size)
//{
//	int i, sum = 0;
//
//	for (i = 0; i < size; i++)
//	{
//		if (i % 2 != 0)
//			A[i] = A[i] * 3;
//	}
//
//	for (i = 0; i < size; i++)
//		sum += A[i];
//
//	if (sum % 10 == 0)
//		return 1;
//	else
//		return 0;
//}