/*

// 1년의 각 달의 일수를 출력하는 프로그램을 작성하여보자
// 즉, 달이 주어지면 그 달의 일수를 출력한다
// switch문 사용

#include <stdio.h>
int main(void)
{
	int month, days;

	printf("일수를 알고 싶은 달을 입력하시오: ");
	scanf("%d", &month);

	switch(month)
	{
		case 2:
			days = 28;
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			days = 30;
			break;
		default:
			days = 31;
			break;
	}
	printf("%d월의 일수는 %d입니다.\n", month, days);

	return 0;
}

*/