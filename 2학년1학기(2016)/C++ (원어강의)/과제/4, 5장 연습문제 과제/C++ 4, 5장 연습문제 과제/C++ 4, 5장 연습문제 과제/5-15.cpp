//#include <iostream>
//using namespace std;
//void absolute (int *);// 절댓값을 구하는 함수 absolute의 선언(주소 호출 방식)
//
//void main( )
//{
//	int a = -10;
//	cout<<"main 에서 호출 전 a 값 = "<<a<<"\n";
//	absolute(&a);
//	cout<<"main 에서 호출 후 a 값 = "<<a<<"\n";
//}
//
//void absolute(int *num) { // 절댓값을 구하는 함수 absolute의 정의(주소 호출 방식)
//	if (*num<0)
//		*num *= -1;
//}