//#include <iostream>
//using namespace std;
//
//class StaticTest {
//private:
//	static int a;
//	int b;
//public:
//	StaticTest( );
//	static void SetA(int new_a);
//	static int GetA( );
//};
//
//int StaticTest::a = 10;
//
//StaticTest::StaticTest( )
//{
//	b = 20;
//}
//
//void StaticTest::SetA(int new_a) {
//	a = new_a;
//}
//
//int StaticTest::GetA( ) {
//	return a;
//}
//
//void main( )
//{
//	//cout<<" StaticTest.a => "<<StaticTest.a<<"\n\n";
//	cout<<" StaticTest::GetA() => "<<StaticTest::GetA( )<<"\n\n";
//
//	StaticTest s1, s2;
//
//	s1.SetA(10000);
//
//	cout<<" s1.GetA() -> "<<s1.GetA( )<<"\t";
//	cout<<" s2.GetA() -> "<<s2.GetA( )<<"\n";
//}