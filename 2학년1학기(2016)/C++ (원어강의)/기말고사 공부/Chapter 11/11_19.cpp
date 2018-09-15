//#include <iostream>
//using namespace std;
//class Complex {
//private:
//	int real;
//	int image;
//public:
//	Complex(int r = 0, int i = 0);
//	void ShowComplex( );
//	friend Complex &AddOnePrefix(Complex *Operand);
//	friend Complex AddOnePostfix(Complex *Operand);
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
//Complex &AddOnePrefix(Complex *Operand)
//{
//	++Operand->real;
//	++Operand->image;
//	return *Operand;
//}
//
//Complex AddOnePostfix(Complex *Operand)
//{
//	Complex temp;
//	temp = *Operand;
//	++Operand->real;
//	++Operand->image;
//	return temp;
//}
//
//void main( )
//{
//	Complex x(10, 20), y(20, 40);
//	Complex z;
//
//	cout<<"---急青贸府---\n";
//	z = AddOnePrefix(&x);
//	x.ShowComplex( );
//	z.ShowComplex( );
//
//	cout<<"---饶青贸府---\n";
//	z = AddOnePostfix(&y);
//	y.ShowComplex( );
//	z.ShowComplex( );
//}