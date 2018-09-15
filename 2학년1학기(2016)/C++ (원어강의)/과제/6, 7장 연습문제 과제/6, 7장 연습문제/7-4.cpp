//#include <iostream>
//using namespace std;
//void add(int *pa, int *pb, int *pc, int size); // 함수의 원형 정의
//void main( )
//{
//	int a[ ] = {10,20,30};
//	int b[ ] = {40,50,60};
//	int c[3];
//	int size = sizeof(a)/sizeof(a[0]); // 배열 원소의 개수를 구한다.
//
//	add(a, b, c, size); // 함수 호출배열의 시작 주소와 원소의 개수를 전달해 준다.
//
//	for (int i = 0; i<size; i++)
//		cout<<c[i]<<"\t";
//	cout<<"\n";
//}
//void add(int *pa, int *pb, int *pc, int size) // 함수의 정의
//{
//	for (int i = 0; i<size; i++)
//		*(pc+i) = *(pa+i)+*(pb+i);
//}