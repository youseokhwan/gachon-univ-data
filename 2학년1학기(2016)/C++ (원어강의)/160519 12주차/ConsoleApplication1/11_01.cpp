//#include <iostream>
//using namespace std;
//class Complex
//{
//private:
//	int real;
//	int image;
//public:
//	Complex(int r = 0, int i = 0);
//	void ShowComplex( ) const;
//};
//
//Complex::Complex(int r, int i):real(r), image(i)
//{
//
//}
//
//void Complex::ShowComplex( ) const
//{
//	cout<<"( "<<real<<" + "<<image<<"i )"<<endl;
//}
//
//void main( )
//{
//	Complex x(10, 20);
//	Complex y;
//	cout<<" Object x => ";
//	x.ShowComplex( );
//	cout<<" Object y => ";
//	y.ShowComplex( );
//
//	Complex *pCom;
//	pCom = &x;
//	cout<<"\n pCom->ShowComplex() => ";
//	pCom->ShowComplex( );
//
//	pCom = &y;
//	cout<<" pCom->ShowComplex() => ";
//	pCom->ShowComplex( );
//}