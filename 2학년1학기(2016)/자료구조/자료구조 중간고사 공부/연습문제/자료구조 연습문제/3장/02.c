//#include <stdio.h>
//void main( )
//{
//	int a[ ] = {19,2,25,92,36,45};
//	int i, max, min, total = 0;
//	double avg, var, sub_total = 0.0;
//
//	printf("1. { ");
//	for (i = 0; i<sizeof(a)/sizeof(a[0]); i++) {
//		printf("%d ", a[i]);
//	}
//	printf("}\n");
//
//	max = min = a[0];
//	for (i = 1; i<sizeof(a)/sizeof(a[0]); i++) {
//		if (a[i]>max)
//			max = a[i];
//		if (a[i]<min)
//			min = a[i];
//	}
//	printf("2. ÃÖ´ñ°ª: %d, ÃÖ¼Ú°ª: %d\n", max, min);
//
//	for (i = 0; i<sizeof(a)/sizeof(a[0]); i++) {
//		total += a[i];
//	}
//	avg = total/(double)(sizeof(a)/sizeof(a[0]));
//	printf("3. Æò±Õ: %.2lf\n", avg);
//
//	for (i = 0; i<sizeof(a)/sizeof(a[0]); i++) {
//		sub_total += (a[i]-avg)*(a[i]-avg);
//	}
//	var = sub_total/(sizeof(a)/sizeof(a[0]));
//	printf("4. ºÐ»ê: %.2lf\n", var);
//}