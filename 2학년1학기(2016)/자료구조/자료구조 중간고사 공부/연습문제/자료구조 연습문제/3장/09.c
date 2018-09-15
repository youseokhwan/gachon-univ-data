//#include <stdio.h>
//
//int sum(int);
//
//void main( )
//{
//	int input, value;
//
//	printf("정수값 입력: ");
//	scanf("%d", &input);
//
//	value = sum(input);
//
//	printf("합: %d\n", value);
//}
//
//int sum(int s)
//{
//	int output;
//
//	if (s==1)
//		output = 1;
//	else if (s>1)
//		output = s+sum(s-1);
//	else
//		output = s+sum(s+1);
//
//	return output;
//}