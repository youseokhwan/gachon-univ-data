//#include <stdio.h>
//
//long int fact(int);
//
//void main()
//{
//	int n, result;
//	
//	printf("정수를 입력하세요: ");
//	scanf("%d", &n);
//	result = fact(n);
//	printf("%d의 factorial 값은 %ld입니다.\n", n, result);
//}
//
//long int fact(int n)
//{
//	int value;
//	
//	if (n <= 1)
//	{
//		printf("fact(1) 함수 호출!\n");
//		printf("fact(1) 값 1 반환!\n");
//
//		return 1;
//	}
//	else
//	{
//		printf("fact(%d) 함수 호출!\n", n);
//		value = (n * fact(n - 1));
//		printf("fact(%d) 값 %ld 반환!\n", n, value);
//
//		return value;
//	}
//}