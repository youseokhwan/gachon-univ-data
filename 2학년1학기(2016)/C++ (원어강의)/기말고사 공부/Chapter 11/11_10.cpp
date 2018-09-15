//#include <iostream>
//using namespace std;
//
//class StaticTest {
//private:
//	static int a;
//	int b;
//public:
//	StaticTest( );
//	static void PrintA( );
//	void PrintB( );
//};
//
//int StaticTest::a = 10;
//
//StaticTest::StaticTest( )
//{
//	b = 20;
//}
//
//void StaticTest::PrintA( ) {
//	cout<<" a : "<<a<<endl;
//	//cout<<" this->a : "<<this->a<<endl;
//	//cout<<" b : "<<b<<endl;
//}
//
//void StaticTest::PrintB( ) {
//	cout<<" this->b : "<<this->b<<endl;
//}
//
//void main( )
//{
//	StaticTest s1;
//
//	s1.PrintA( );
//	s1.PrintB( );
//}