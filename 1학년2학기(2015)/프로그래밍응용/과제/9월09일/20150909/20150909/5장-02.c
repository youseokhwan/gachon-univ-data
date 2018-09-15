//#include<stdio.h>
//
//int main(void)
//{
//	int input, tax;
//
//	printf("과세 표준을 입력하시오(만원): ");
//	scanf("%d", &input);
//
//	if(input <= 1000)
//		tax = 1000 * 0.08;
//	if(input > 1000 && input <= 4000)
//		tax = 1000 * 0.08 + (input - 1000) * 0.17;
//	if(input > 4000 && input <= 8000)
//		tax = 1000 * 0.08 + 3000 * 0.17 + (input - 4000) * 0.26;
//	if(input > 8000)
//		tax = 1000 * 0.08 + 3000 * 0.17 + 4000 * 0.26 + (input - 8000) * 0.35;
//
//	printf("소득세는 %d만원입니다.\n", tax);
//
//	return 0;
//}