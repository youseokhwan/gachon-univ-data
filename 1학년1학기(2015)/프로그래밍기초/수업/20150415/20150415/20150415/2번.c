/*
// 2번
#include<stdio.h>
int main(void)
{
	int money;

	printf("과세 표준을 입력하시오(만원) : ");
	scanf("%d", &money);

	if(money <= 1000)
		printf("소득세는 %d만원입니다.\n", money*8/100);
	else if(money > 1000 && money <= 4000)
		printf("소득세는 %d만원입니다.\n", (money-1000)*17/100+1000*8/100);
	else if(money > 4000 && money <= 8000)
		printf("소득세는 %d만원입니다.\n", (money-4000)*26/100+3000*17/100+1000*8/100);
	else
		printf("소득세는 %d만원입니다.\n", (money-8000)*35/100+4000*26/100+3000*17/100+1000*8/100);

	return 0;
}
*/