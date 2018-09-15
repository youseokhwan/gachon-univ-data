//#include <stdio.h>
//
//int check (int p[]);
//
//int main(void)
//{
//	int i;
//	int isbn[13];
//	
//	printf("ISBN 입력: ");
//
//	for (i = 0; i < 13; i++)
//		scanf("%d", &isbn[i]);
//
//	if (check(isbn) == 1)
//		printf("유효\n");
//	else 
//		printf("유효하지 않음\n");
//
//	return 0;
//}
//
//int check(int p[])
//{
//	int result;
//
//	result = (p[0] + 3*p[1] + p[2] + 3*p[3] + p[4] + 3*p[5] + p[6] + 3*p[7] + p[8] + 3*p[9] + p[10] + 3*p[11] + p[12]) % 10;
//	
//	if (result == 0)
//		return 1;
//	else
//		return 0;
//}
