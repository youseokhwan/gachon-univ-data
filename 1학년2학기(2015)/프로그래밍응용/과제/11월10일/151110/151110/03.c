//#include <stdio.h>
//#include <string.h>
//
//struct employee {
//	int number;
//	char name[10];
//	char phone_number[15];
//	int age;
//};
//
//int main(void)
//{
//	int i;
//	struct employee list[10] = {
//		{1, "Paul", "010 2392 2931", 32},
//		{2, "Kelly", "010 2291 8954", 40},
//		{3, "Sam", "010 1195 0212", 21},
//		{4, "Steve", "010 2294 0505", 43},
//		{5, "Tom", "010 9902 0219", 25},
//		{6, "Henry", "010 9999 2033", 31},
//		{7, "Tames", "010 3333 2333", 45},
//		{8, "Jordan", "010 0022 2233", 21},
//		{9, "Sofia", "010 2994 4949", 33},
//		{10, "Dave", "010 9988 7777", 60}
//	};
//
//	printf("20~30세인 직원의 목록\n");
//	for (i = 0; i < 10; i++)
//	{
//		if (list[i].age >= 20 && list[i].age <= 30)
//			printf("%d %s, %d ages\n", list[i].number, list[i].name, list[i].age);
//	}
//
//	return 0;
//}