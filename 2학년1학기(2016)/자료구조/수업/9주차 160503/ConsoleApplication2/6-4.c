//#include <stdio.h>
//#include <stdlib.h>
//#include <string.h>
//
//typedef int element;
//
//typedef struct stackNode {
//	element data;
//	struct stackNode *link;
//}stackNode;
//
//stackNode* top;
//
//void push(element item)
//{
//	stackNode* temp = (stackNode *)malloc(sizeof(stackNode));
//	temp->data = item;
//	temp->link = top;
//	top = temp;
//}
//
//element pop( )
//{
//	element item;
//	stackNode* temp = top;
//
//	if(top==NULL) {
//		printf("\n\n Stack is empty !\n");
//		return 0;
//	}
//	else {
//		item = temp->data;
//		top = temp->link;
//		free(temp);
//		return item;
//	}
//}
//
//element peek( )
//{
//	element item;
//	if(top==NULL) {
//		printf("\n\n Stack is empty !\n");
//		return 0;
//	}
//	else {
//		item = top->data;
//		return item;
//	}
//}
//
//void del( )
//{
//	stackNode* temp;
//	if(top==NULL) {
//		printf("\n\n Stack is empty !\n");
//	}
//	else {
//		temp = top;
//		top = top->link;
//		free(temp);
//	}
//}
//
//void printStack( )
//{
//	stackNode* p = top;
//	printf("\n STACK [ ");
//	while(p) {
//		printf("%d ", p->data);
//		p = p->link;
//	}
//	printf("] ");
//}
//
//element evalPostfix(char *exp)
//{
//	int opr1, opr2, value, i = 0;
//	int length = strlen(exp);
//	char symbol;
//	top = NULL;
//
//	for(i = 0; i<length; i++) {
//		symbol = exp[i];
//		if
//	}
//}