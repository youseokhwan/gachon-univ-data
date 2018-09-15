/*

// 10년 동안 월급을 모두 저금할 경우, 얼마나 모을 수 있는지를 계산하는 프로그램을 작성해보자.
// 먼저 사용자에게 월급의 액수를 입력받는다.
// 월급에 12를 곱하여 연봉을 계산하고 다시 여기에 10을 곱하여 10년 동안 저축할 수 있는 금액을 계산한다.

#include <stdio.h>
int main(void)
{
	int salary; // 월급
	int deposit; // 저축액

	printf("월급을 입력하시오: ");
	scanf("%d", &salary);

	deposit = salary * 12 * 10;

	printf("10년 동안의 저축액: %d\n", deposit);

	return 0;
}

*/