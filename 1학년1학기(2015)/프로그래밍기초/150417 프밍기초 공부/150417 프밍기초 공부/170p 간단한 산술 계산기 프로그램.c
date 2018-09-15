/*

// 간단한 산술 계산기를 만들어보자.
// 2개의 피연산자를 받아서 +, -, *, /, % 연산을 할 수 있는 프로그램을 제작하여보자

#include <stdio.h>
int main(void)
{
	char op;
	int x, y;

	printf("수식을 입력하시오: ");
	scanf("%d %c %d", &x, &op, &y);

	if(op == '+')
		printf("%d %c %d = %d\n", x, op, y, x + y);
	else if(op == '-')
		printf("%d %c %d = %d\n", x, op, y, x - y);
	else if(op == '*')
		printf("%d %c %d = %d\n", x, op, y, x * y);
	else if(op == '/')
		printf("%d %c %d = %d\n", x, op, y, x / y);
	else if(op == '%')
		printf("%d %c %d = %d\n", x, op, y, x % y);
	else
		printf("지원되지 않는 연산자입니다.\n");

	return 0;
}

*/