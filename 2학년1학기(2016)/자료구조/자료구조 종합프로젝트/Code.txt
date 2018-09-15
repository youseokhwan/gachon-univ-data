#include <stdio.h>
#define MAX 8
#define NAME_LENGTH 20
#define INFINITY 9999
#define TRUE 1
#define FALSE 0
#define MIN(a,b) ((a)<(b)?(a):(b))

const char station_name[MAX][NAME_LENGTH] = {"동대문", "신설동", "서울역", "왕십리", "건대", "신도림", "사당", "선릉"};

struct node {
	int vertex;
	struct node* link;
};

struct graph {
	int n;
	struct node* head[MAX];
	int weight[MAX][MAX];
};

void create_graph(struct graph *p);
void insert_vertex(struct graph *p);
void insert_edge(struct graph *p, int u, int v, int w);
void print_list(struct graph *p);
void floyd(struct graph *p);
void print_weight_array(struct graph *p);
int menu( );

void main( )
{
	int i, select;
	struct graph *G;

	G = (struct graph*)malloc(sizeof(struct graph));
	create_graph(G);
	for (i = 0; i<MAX; i++) {
		insert_vertex(G);
	}
	insert_edge(G, 0, 1, 4);
	insert_edge(G, 0, 2, 9);
	insert_edge(G, 1, 0, 4);
	insert_edge(G, 1, 3, 18);
	insert_edge(G, 1, 4, 22);
	insert_edge(G, 2, 0, 9);
	insert_edge(G, 2, 5, 19);
	insert_edge(G, 2, 6, 16);
	insert_edge(G, 3, 1, 18);
	insert_edge(G, 3, 4, 8);
	insert_edge(G, 3, 7, 11);
	insert_edge(G, 4, 1, 22);
	insert_edge(G, 4, 3, 8);
	insert_edge(G, 4, 7, 17);
	insert_edge(G, 5, 2, 19);
	insert_edge(G, 5, 6, 18);
	insert_edge(G, 6, 2, 16);
	insert_edge(G, 6, 5, 18);
	insert_edge(G, 6, 7, 13);
	insert_edge(G, 7, 3, 11);
	insert_edge(G, 7, 4, 17);
	insert_edge(G, 7, 6, 13);
	while (1) {
		select = menu( );
		switch (select) {
			case 1:
				system("cls");
				printf("1. 인접 리스트 출력\n\n");
				print_list(G);
				break;
			case 2:
				system("cls");
				printf("\n2. 역(Station)간 소요시간 전체 출력\n\n");
				print_weight_array(G);
				break;
			case 3:
				system("cls");
				printf("\n\n3. 최단시간 찾기 (Floyd Algorithm)\n\n");
				floyd(G);
				break;
			case 4:
				system("cls");
				printf("\n\n\n4. 종료\n\n");
				exit(0);
			default:
				printf("알 수 없는 번호입니다.");
		}
		system("pause > null");
		system("cls");
	}
}

void create_graph(struct graph *p)
{
	int i, j;
	p->n = 0;
	for (i = 0; i<MAX; i++) {
		p->head[i] = NULL;
	}
	for (i = 0; i<MAX; i++) {
		for (j = 0; j<MAX; j++) {
			if (i==j)
				p->weight[i][j] = 0;
			else
				p->weight[i][j] = INFINITY;
		}
	}
}

void insert_vertex(struct graph *p)
{
	if ((p->n)+1>MAX) {
		printf("Overflow!\n");
		exit(1);
	}
	else {
		p->n++;
	}
}

void insert_edge(struct graph *p, int u, int v, int w)
{
	struct node *_node;
	_node = (struct node*)malloc(sizeof(struct node));
	_node->vertex = v;
	_node->link = p->head[u];
	p->head[u] = _node;
	p->weight[u][v] = w;
}

void print_list(struct graph *p)
{
	int i;
	struct node *_node;
	for (i = 0; i<p->n; i++) {
		printf("정점 \"%s\"의 인접 리스트", station_name[i]);
		_node = p->head[i];
		while (_node) {
			printf(" -> \"%s\"", station_name[_node->vertex]);
			_node = _node->link;
		}
		printf("\n");
	}
}

void print_weight_array(struct graph *p)
{
	int i, j;
	printf("%7s", " ");
	for (i = 0; i<MAX; i++)
		printf("%7s", station_name[i]);
	printf("\n");
	for (i = 0; i<MAX; i++) {
		printf("%7s", station_name[i]);
		for (j = 0; j<MAX; j++) {
			if (p->weight[i][j]==INFINITY)
				printf("%7s", " ");
			else {
				printf("%5d", p->weight[i][j]);
				printf("분");
			}
		}
		printf("\n\n");
	}
}

void floyd(struct graph *p)
{
	int dist[MAX][MAX];
	int i, j, k;
	int start, finish;

	for (i = 0; i<MAX; i++)
		for (j = 0; j<MAX; j++)
			dist[i][j] = p->weight[i][j];

	for (k = 0; k<MAX; k++)
		for (i = 0; i<MAX; i++)
			for (j = 0; j<MAX; j++)
				dist[i][j] = MIN(dist[i][j], dist[i][k]+dist[k][j]);

	printf("0. 동대문\t1. 신설동\t2. 서울역\t3. 왕십리\n");
	printf("4. 건대\t\t5. 신도림\t6. 사당\t\t7. 선릉\n\n");
	printf("출발역 번호: ");
	scanf("%d", &start);
	printf("도착역 번호: ");
	scanf("%d", &finish);

	printf("\n최단시간: %d분\n", dist[start][finish]);
}

int menu( )
{
	int _select;

	printf("1. 인접 리스트 출력\n");
	printf("2. 역(Station)간 소요시간 전체 출력\n");
	printf("3. 최단시간 찾기 (Floyd Algorithm)\n");
	printf("4. 종료\n\n");
	printf("메뉴 선택: ");
	scanf("%d", &_select);
	
	return _select;
}