/*

#include <stdio.h>
#include <math.h>
int main(void)
{
	int a, b, c;
	float result1 = 0.0, result2 = 0.0;

	printf("계수 a를 입력하시오: ");
	scanf("%d", &a);

	printf("계수 b를 입력하시오: ");
	scanf("%d", &b);

	printf("계수 c를 입력하시오: ");
	scanf("%d", &c);

	if (a == 0)
	{
		result1 = -c / b;
		printf("방정식의 근은 %f입니다.\n", result1);
	}
	else if (b*b-4*a*c < 0)
	{
		printf("실근이 존재하지 않습니다.\n");
	}
	else
	{
		result1 = (-b + sqrt(b*b-4*a*c)) / (2 * a);
		result2 = (-b - sqrt(b*b-4*a*c)) / (2 * a);
		printf("방정식의 근은 %f입니다.\n", result1);
		printf("방정식의 근은 %f입니다.\n", result2);
	}

	return 0;
}

*/