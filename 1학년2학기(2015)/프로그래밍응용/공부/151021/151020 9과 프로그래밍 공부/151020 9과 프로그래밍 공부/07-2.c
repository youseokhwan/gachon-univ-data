////char *week[] = {"SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", };
////
////1. 첫문자 출력
////<출력>
////*week[0] = S
////*week[1] = M
////...
////
////2. 3글자 모두 출력
////<출력>
////week[0] = SUN
////week[1] = MON
////...
//
//#include <stdio.h>
//
//int main ()
//{
//	char *week[] = {"SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", };
//	int i;
//
//	for (i = 0; i < 7; i++)
//		printf("*week[%d] = %c\n", i, week[i][0]);
//
//	for (i = 0; i < 7; i++)
//		printf("week[%d] = %s\n", i, week[i]);
//
//	return 0;
//}