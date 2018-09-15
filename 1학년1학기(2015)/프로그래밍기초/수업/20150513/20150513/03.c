/*
// 반지름을 인자로 받아서
// - 원의 면적을 구하는 함수
// - 원의 둘레를 구하는 함수를 작성하시오.

#include <stdio.h>
#define PI 3.14
float get_cir(float r);
float get_area(float r);
int main(void)
{
	float r;
	printf("반지름 입력: ");
	scanf("%f", &r);
	
	printf("둘레: %f\n", get_cir(r));
	printf("면적: %f\n", get_area(r));

	return 0;
}

float get_cir(float r)
{
	float result;
	
	result = 2 * PI * r;

	return result;
}

float get_area(float r)
{
	float result;

	result = PI * r * r;

	return result;
}
*/