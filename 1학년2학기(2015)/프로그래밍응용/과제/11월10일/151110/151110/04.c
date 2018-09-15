//#include <stdio.h>
//
//struct complex_number {
//	double x;
//	double y;
//};
//
//int main(void)
//{
//	double sumx = 0.0;
//	double sumy = 0.0;
//	struct complex_number list[2];
//
//	printf("첫번째 복소수를 입력하시오(a, b): ");
//	scanf("%lf %lf", &list[0].x, &list[0].y);
//	printf("두번째 복소수를 입력하시오(c, d): ");
//	scanf("%lf %lf", &list[1].x, &list[1].y);
//
//	sumx = list[0].x + list[1].x;
//	sumy = list[0].y + list[1].y;
//
//	printf("복소수의 합은 %lf + %lfi입니다.\n", sumx, sumy);
//
//	return 0;
//}