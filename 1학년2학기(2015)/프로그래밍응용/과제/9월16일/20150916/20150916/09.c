//#include <stdio.h>
//void plus(int num1, int num2);
//void minus(int num1, int num2);
//void multiply(int num1, int num2);
//void divide(int num1, int num2);
//int main (void)
//{
//	int num1 = 0, num2 = 0;
//	char op = 0;
//
//	while(1)
//	{
//		printf("연산을 입력하시오: ");
//		scanf("%d %c %d", &num1, &op, &num2);
//
//		if (op = '+')
//			plus(num1, num2);
//
//		else if (op = '-')
//			minus(num1, num2);
//
//		else if (op = '*')
//			multiply(num1, num2);
//		
//		else if (op = '/')
//			divide(num1, num2);
//	}
//
//	return 0;
//}
//void plus(int num1, int num2)
//{
//	static int p_count;
//
//	p_count++;
//
//	printf("연산 결과: %d\n", num1 + num2);
//	printf("덧셈은 총 %d번 실행되었습니다.\n\n", p_count);
//}
//void minus(int num1, int num2)
//{
//	static int mi_count;
//
//	mi_count++;
//
//	printf("연산 결과: %d\n", num1 - num2);
//	printf("뺄셈은 총 %d번 실행되었습니다.\n\n", mi_count);
//}
//void multiply(int num1, int num2)
//{
//	static int mu_count;
//
//	mu_count++;
//
//	printf("연산 결과: %d\n", num1 * num2);
//	printf("곱셈은 총 %d번 실행되었습니다.\n\n", mu_count);
//}
//void divide(int num1, int num2)
//{
//	static int d_count;
//
//	d_count++;
//
//	printf("연산 결과: %d\n", num1 / num2);
//	printf("나눗셈은 총 %d번 실행되었습니다.\n\n", d_count);
//}