//#include <stdio.h>
//#include <string.h>
//#include <conio.h>
//
//int main(void)
//{
//	char seps[] = " ";
//	char text[100], search[100], change[100], finish[100] = "";
//	char *token;
//
//	printf("문자열을 입력하시오: ");
//	gets(text);
//
//	printf("찾을 문자열: ");
//	gets(search);
//
//	printf("바꿀 문자열: ");
//	gets(change);
//
//	token = strtok(text, seps);
//
//	while (token != NULL)
//	{
//		if (strcmp(token, search) == 0)
//			strcat(finish, change);
//		else
//			strcat(finish, token);
//		token = strtok(NULL, seps);
//		strcat(finish, " ");
//	}
//
//	printf("결과: %s\n", finish);
//
//	return 0;
//}