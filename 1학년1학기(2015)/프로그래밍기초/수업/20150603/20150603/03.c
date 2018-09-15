//버블정렬
#include <stdio.h>
#define SIZE 10

int main()
{
	int list[SIZE]={3,2,9,7,1,4,8,0,6,5};
	
	int j,i,most,temp;
	
	for(i=0;i<SIZE-1;i++)
	{
		most = 0;
		for(j=0;j<SIZE-i;j++)
			if(list[j]>list[most])
				most=j;
				
		temp=list[9-i];
		list[9-i]=list[most];
		list[most]=temp;
		
	}
	for(i=0;i<SIZE;i++)
		printf("%2d",list[i]);
		printf("\n");
		return 0;
}
