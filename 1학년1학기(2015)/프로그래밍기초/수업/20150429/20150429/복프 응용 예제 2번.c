/*
//세균 배양기
//세균이 1시간에 4배씩 증가한다, 세균 10마리를 배양해서 7시간 후는 몇마리가 될까?
#include <stdio.h>
int main(void)
{
	int gem, time;

	gem = 10;

	for(time = 0;time < 7;time++)
		gem = gem * 4;

	printf("7시간 후의 세균의 수는 %d입니다.\n", gem);

	return 0;
}
*/
