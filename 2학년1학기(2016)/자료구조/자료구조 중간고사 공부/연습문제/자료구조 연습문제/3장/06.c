//#include <stdio.h>
//
//void change_alpha(char *pc);
//
//void main( )
//{
//	char input[20];
//
//	printf("문자열 입력: ");
//	scanf("%s", input);
//
//	change_alpha(input);
//
//	printf("변환 후: %s\n", input);
//}
//
//void change_alpha(char *pc)
//{
//	int i;
//
//	for (i = 0; i<20; i++) {
//		if (pc[i]>='A'&&pc[i]<='Z')
//			pc[i] += 32;
//		else if (pc[i]>='a'&&pc[i]<='z')
//			pc[i] -= 32;
//	}
//}