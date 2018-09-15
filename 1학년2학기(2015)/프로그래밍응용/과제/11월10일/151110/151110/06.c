//#include <stdio.h>
//#include <string.h>
//#define TITLE_SIZE 50
//#define NAME_SIZE 50
//#define LOCATION_SIZE 50
//
//enum book_type { COMIC, SCI, NOVEL, CLASSIC };
//
//typedef struct book {
//	char title[TITLE_SIZE];
//	char author[NAME_SIZE];
//	char location[LOCATION_SIZE];
//	enum book_type genre;
//} BOOK;
//
//void add_record(BOOK library[], int count);
//void menu();
//int get_input();
//void search_record(BOOK library[], int count);
//void print_record(BOOK library[], int count);
//void sort_record(BOOK library[], int n);
//
//int main(void)
//{
//	int num, count = 0;
//	BOOK library[30] = { '\0' };
//
//	while (1)
//	{
//		menu();
//		num = get_input();
//
//		switch (num)
//		{
//		case 1:
//			add_record(library, count);
//			count++;
//			continue;
//		case 2:
//			print_record(library, count);
//			continue;
//		case 3:
//			search_record(library, count);
//			continue;
//		case 4:
//			return -1;
//		}
//		return 0;
//	}
//}
//
//void add_record(BOOK library[], int count)
//{
//	int type;
//
//	fflush(stdin);
//	printf("제목:");
//	gets(library[count].title);
//
//	printf("저자:");
//	gets(library[count].author);
//
//	printf("위치:");
//	gets(library[count].location);
//
//	printf("장르(0: 만화, 1: 공상소설, 2: 소설, 3: 고전)");
//	scanf("%d", &type);
//
//	if (type >= 0 && type <= 3)
//		library[count].genre = type;
//	else
//		library[count].genre = COMIC;
//}
//
//void menu()
//{
//	printf("====================\n");
//	printf(" 1. 추가\n");
//	printf(" 2. 출력\n");
//	printf(" 3. 검색\n");
//	printf(" 4. 종료\n");
//	printf("====================\n");
//}
//
//int get_input()
//{
//	int num;
//
//	printf("정수값을 입력하시오 : ");
//	scanf("%d", &num);
//
//	return num;
//}
//
//void search_record(BOOK library[], int count)
//{
//	int i;
//	char title[TITLE_SIZE];
//
//	fflush(stdin);
//	printf("제목: ");
//	gets(title);
//
//	for (i = 0; i < count; i++)
//	{
//		if (strcmp(title, library[i].title) == 0)
//		{
//			printf("저장된 위치는 %s\n", library[i].location);
//			return;
//		}
//	}
//
//	printf("찾는 책이 테이블에 없습니다.\n");
//}
//
//void print_record(BOOK library[], int count)
//{
//	int i;
//	fflush(stdin);
//
//	for (i = 0; i < count; i++)
//	{
//		printf("제목 : %s\n", library[i].title);
//		printf("저자 : %s\n", library[i].author);
//		printf("위치 : %s\n", library[i].location);
//
//		if (library[i].genre == 0)
//			printf("장르 : 코믹\n");
//
//		else if (library[i].genre == 1)
//			printf("장르 : 공상과학\n");
//
//		else if (library[i].genre == 2)
//			printf("장르 : 소설\n");
//
//		else if (library[i].genre == 3)
//			printf("장르 : 고전\n");
//	}
//}