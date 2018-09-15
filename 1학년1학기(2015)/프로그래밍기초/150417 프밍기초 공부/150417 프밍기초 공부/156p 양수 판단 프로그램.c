/*

// 키보드에서 입력받은 정수가 양수인지를 말해주는 프로그램
// 사용자로부터 입력받은 수를 if 문을 이용하여 검사하면 된다.

#include <stdio.h>
int main(void)
{
	int number;

	printf("정수를 입력하시오: ");
	scanf("%d", &number);

	printf("입력된 값은 %d입니다.\n", number);

	if(number > 0)
		printf("양수입니다.\n");
	
	return 0;
}

*/