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
//	Complex Sum(Complex rightHand);
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
//Complex Complex::Sum(Complex rightHand)
//{
//	Complex res;
//	res.real = this->real+rightHand.real;
//	res.image = this->image+rightHand.image;
//	return res;
//}
//void main( )
//{
//	Complex x(10, 20), y(20, 40);
//	Complex z;
//	z= x.Sum(y);
//	x.ShowComplex( );
//	y.ShowComplex( );
//	z.ShowComplex( );
//}