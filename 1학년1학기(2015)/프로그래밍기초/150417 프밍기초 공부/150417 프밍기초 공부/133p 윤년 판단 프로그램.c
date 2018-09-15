/*

// 윤년 계산 프로그램
// 입력된 연도가 윤년인지 아닌지를 판단하는 프로그램. 다음 조건을 만족해야 윤년이다.
// 1. 연도가 4로 나누어 떨어진다.
// 2. 100으로 나누어 떨어지는 연도는 제외한다.
// 3. 400으로 나누어 떨어지는 연도는 윤년이다.
// 윤년이면 1이 출력되고 윤년이 아니면 0이 출력된다.

#include <stdio.h>
int main(void)
{
	int year, result;

	printf("연도를 입력하시오: ");
	scanf("%d", &year);

	result = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
	
	printf("result = %d\n", result);

	return 0;
}

*/