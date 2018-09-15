//#include <iostream>
//using namespace std;
//class Complex
//{
//private :
//	int real;
//	int image;
//public:
//	Complex(int r = 0, int i = 0);
//	void ShowComplex( );
//
//	Complex AddOnePrefix( );
//	Complex AddOnePostfix( );
//};
//
//Complex::Complex(int r, int i)
//{
//	real = r;
//	image = i;
//}
//
//void Complex::ShowComplex( )
//{
//	cout<<"( "<<real<<" + "<<image<<"i )"<<endl;
//}
//
//Complex Complex::AddOnePrefix( )
//{
//	++this->real;
//	++this->image;
//	return *this;
//}
//
//Complex Complex::AddOnePostfix( )
//{
//	Complex temp;
//	temp = *this;
//	++this->real;
//	++this->image;
//	return temp;
//}
//
//void main( )
//{
//	Complex x(10, 20), y(20, 40);
//	Complex z;
//
//	cout<<"---- 急青贸府 ----\n";
//	z = x.AddOnePrefix( );
//	x.ShowComplex( );
//	z.ShowComplex( );
//
//	cout<<"---- 饶青贸府 ----\n";
//	z = y.AddOnePostfix( );
//	y.ShowComplex( );
//	z.ShowComplex( );
//}