/*

// 사용자로부터 두 개의 정수를 입력받아서 정수 간의 나눗셈을 실행한다.
// 나눗셈을 하기 전에 분모가 0인지를 if 문을 이용하여 검사한다.

#include <stdio.h>
int main(void)
{
	int num1, num2, result;

	printf("분자를 입력하시오: ");
	scanf("%d", &num1);

	printf("분모를 입력하시오: ");
	scanf("%d", &num2);

	if(num2 == 0)
	{
		printf("0으로 나눌 수는 없습니다.\n");
	}
	else
	{
		result = num1 / num2;
		printf("결과는 %d입니다.\n", result);
	}

	return 0;
}

*/