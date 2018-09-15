#include <stdio.h>
/* 포인터 연산자 예제 */
void main()
{
	int i = 10, j = 20;
	int *ptr;

	printf("i의 값 = %d\nj의 값 = %d\n", i, j);
	printf("i의 메모리 주소(&i) = %u\n", &i);
	printf("j의 메모리 주소(&j) = %u\n", &j);

	ptr = &i;
	printf("\n<<ptr=&i 실행>>\n");
	printf("ptr의 메모리 주소(&ptr) = %u\n", &ptr);
	printf("ptr의 값(ptr) = %u\n", ptr);
	printf("ptr의 참조 값(*ptr) = %d\n", *ptr);

	ptr = &j;
	printf("\n<<ptr=&j 실행>>\n");
	printf("ptr의 메모리 주소(&ptr) = %u\n", &ptr);
	printf("ptr의 값(ptr) = %u\n", ptr);
	printf("ptr의 참조 값(*ptr) = %d\n", *ptr);

	i = *ptr;
	printf("\n<<i = *ptr 실행>>\n");
	printf("i의 값 = %d\n", i);
}