//#include <iostream>
//using namespace std;
//class Complex {
//private:
//	int real;
//	int image;
//public:
//	Complex(int r = 0, int i = 0);
//	friend ostream &operator<<(ostream &os, const Complex &comObj);
//};
//
//Complex::Complex(int r, int i)
//{
//	real = r;
//	image = i;
//}
//
//ostream &operator<<(ostream &os, const Complex &comObj)
//{
//	os<<"( "<<comObj.real<<" + "<<comObj.image<<"i ) "<<endl;
//	return os;
//}
//
//void main( )
//{
//	Complex x(10, 20);
//	cout<<x;
//}