//#include <iostream>
//using namespace std;
//class Complex {
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
//}
//
//void Complex::ShowComplex( ) const
//{
//	cout<<"( "<<real<<" + "<<image<<"i )"<<endl;
//}
//
//void main( )
//{
//	Complex arr[4] = {
//		Complex(2, 4),
//		Complex(4, 8),
//		Complex(8, 16),
//		Complex(16, 32)
//	};
//	
//	Complex *pCom = arr;
//
//	pCom->ShowComplex( );
//	(pCom+1)->ShowComplex( );
//}