/*

// 사용자로부터 원의 반지름을 입력받고, 이 원의 면적을 구한 다음, 화면에 출력한다.
// 실수형 변수 선언

#include <stdio.h>
int main(void)
{
	double radius; // 원의 반지름
	double area; // 면적

	printf("반지름을 입력하시오: ");
	scanf("%lf", &radius);

	area = 3.14 * radius * radius;

	printf("원의 면적: %lf\n", area);

	return 0;
}

*/