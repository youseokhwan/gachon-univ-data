//#include <stdio.h>
//#define MAX_DEGREE 50
//#define ADD(a,b) (a+b)
//
//typedef struct {
//	int degree; // 다항식의 차수
//	double coef[MAX_DEGREE]; // 다항식의 계수들 나열한 배열
//} polynomial; // 다항식 구조체 선언
//
//polynomial multPoly(polynomial A, polynomial B); // 두 다항식을 곱해주는 함수
//void printPoly(polynomial P); // 다항식 출력하는 함수
//
//void main()
//{
//	polynomial A, B, C; // A, B는 입력받고 C는 multPoly(A, B)의 값(결과 값)
//	int i; // for문 돌리기 위한 변수
//	
//	for (i = 0; i<MAX_DEGREE; i++)
//		A.coef[i] = B.coef[i] = C.coef[i] = 0; // 식을 입력받기 전 전부 0으로 초기화
//
//	printf("다항식 A의 최고차항 입력: ");
//	scanf("%d", &A.degree);
//	printf("다항식 A의 계수를 높은 차수부터 입력: ");
//	for (i = A.degree; i>=0; i--)
//		scanf("%lf", &A.coef[i]);
//	printf("\n"); // 다항식 A에 관한 input
//
//	printf("다항식 B의 최고차항 입력: ");
//	scanf("%d", &B.degree);
//	printf("다항식 B의 계수를 높은 차수부터 입력: ");
//	for (i = B.degree; i>=0; i--)
//		scanf("%lf", &B.coef[i]);
//	printf("\n"); // 다항식 B에 관한 input
//
//	C = multPoly(A, B); // 다항식 C = 다항식 A*다항식 B;
//
//	printf("A(x) = ");
//	printPoly(A); // 다항식 A 출력
//	printf("B(x) = ");
//	printPoly(B); // 다항식 B 출력
//	printf("C(x) = ");
//	printPoly(C); // 다항식 C 출력
//}
//
//polynomial multPoly(polynomial A, polynomial B)
//{
//	polynomial C; // 다항식 곱셈 결과 저장할 다항식 C 선언
//	int i, j; // i, j는 for문 돌리기 위한 함수
//	C.degree = ADD(A.degree, B.degree); // C의 차수는 A의 차수+B의 차수
//
//	for (i = 0; i<=C.degree; i++)
//		C.coef[i] = 0; // C.coef 배열의 원소들 0으로 초기화
//
//	for (i = 0; i<=A.degree; i++)
//	{
//		for (j = 0; j<=B.degree; j++)
//			C.coef[i+j] += A.coef[i]*B.coef[j];
//	}
//
//	return C; // 다항식 C 반환
//}
//
//void printPoly(polynomial P) // 교재 그대로 인용 후 변수 i의 순서만 변경
//{
//	int i, degree; // i는 for문 돌리기 위한 변수, degree는 현재 차수
//	degree = P.degree;
//
//	for (i = P.degree; i>=0; i--)
//		printf("%3.0fx^%d", P.coef[i], degree--);
//	printf("\n");
//}