//#include <iostream>
//using namespace std;
//class Complex
//{
//private:
//	int real;
//	int image;
//public:
//	Complex(int r = 0, int i = 0);
//	void ShowComplex( );
//	friend Complex Sum(Complex leftHand, Complex rightHand);
//};
//
//void Complex::ShowComplex( )
//{
//	cout<<"( "<<real<<" + "<<image<<"i )"<<endl;
//}
//
//Complex::Complex(int r, int i)
//{
//	real = r;
//	image = i;
//}
//
//Complex Sum(Complex leftHand, Complex rightHand)
//{
//	Complex res;
//	res.real = leftHand.real+rightHand.real;
//	res.image = leftHand.image+rightHand.image;
//	return res;
//}
//
//void main( )
//{
//	Complex x(10, 20), y(20, 40);
//	Complex z;
//	z = Sum(x, y);
//	x.ShowComplex( );
//	y.ShowComplex( );
//	z.ShowComplex( );
//}