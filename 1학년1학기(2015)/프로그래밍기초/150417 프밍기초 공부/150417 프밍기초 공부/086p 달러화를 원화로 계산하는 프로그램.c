/*

// 사용자로부터 받는 달러화는 정수 변수 usd에 저장한다.
// 달러화에 환율을 곱하여서 사용자가 입력한 달러화가 몇 원에 해당하는 지를 계산한다.
// 환율은 1달러당 1120원이라고 가정하자.

#include <stdio.h>
int main(void)
{
	int usd, krw; // usd는 달러화, krw는 원화

	printf("달러화 금액을 입력하시오: ");
	scanf("%d", &usd);

	krw = usd * 1120;

	printf("달러화 %d달러는 %d원입니다.\n", usd, krw);

	return 0;
}

*/