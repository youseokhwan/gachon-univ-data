//#include <iostream>
//using namespace std;
//
//class StaticTest {
//public:
//	static int a;
//	int b;
//
//	StaticTest( );
//};
//
//StaticTest::StaticTest( )
//{
//	b = 20;
//}
//
//int StaticTest::a = 10;
//
//void main( )
//{
//	cout<<" StaticTest::a => "<<StaticTest::a<<"\n\n";
//	//cout<<" StaticTest::b => "<<StaticTest::b<<"\n\n";
//
//	StaticTest s1, s2;
//
//	cout<<" s1.a -> "<<s1.a<<"\t s2.a -> "<<s2.a<<"\n";
//	cout<<" s1.b -> "<<s2.b<<"\t s2.b -> "<<s2.b<<"\n\n";
//
//	s1.a = 100;
//	cout<<" s1.a => "<<s1.a<<"\t";
//	cout<<" s2.a => "<<s2.a<<"\n\n";
//
//	s1.b = 200;
//	cout<<" s1.b => "<<s1.b<<"\t";
//	cout<<" s2.b => "<<s2.b<<"\n";
//}