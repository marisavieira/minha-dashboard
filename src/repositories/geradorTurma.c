#include <stdio.h>
#include <stdlib.h>
#include <math.h>

#define notaMin    (0)
#define notaMax    (2.5)

typedef struct{
	float nota1;
	int qntFalta1;
	
	float nota2;
	int qntFalta2;
	
	float nota3;
	int qntFalta3;
	
	float nota4;
	int qntFalta4;
	
	int qntFaltaTotal;
}estudante;


float precisao (float num){
	float rounded_down = floorf(num * 10) / 10;
	return rounded_down+0.1;
}

double randf(){
	float numero = (rand() * notaMax /RAND_MAX);
    return numero=precisao(numero);
}

float gerarQntFalta(float nota){	
	if(nota>=1.8) return rand() % 5;
	else if(nota<1.8 && nota>1) return (rand() % 5)+5;
	else return (rand() % 10)+10;	
}



/*------------------------------------------------*/
/*------------------GRAFICO 1.1 -----------------*/
/*----------------------------------------------*/
int arquivo0101(FILE *arquivo, estudante estudantes[41]){
  	int i=0;
  	
	arquivo = fopen("grafico1.ts", "w");	
  	if(arquivo == NULL){
		printf("Erro na abertura do arquivo!");
  	}
	i=(rand() % 39)+1;
  	fprintf(arquivo, "export default [\n	{ 'name': 'Atividade 1',		'faltas': '%d',		'nota': '%.1f'},\n	{ 'name': 'Atividade 2',		'faltas': '%d',		'nota': '%.1f'},\n	{ 'name': 'Atividade 3',		'faltas': '%d',		'nota': '%.1f'},\n	{ 'name': 'Atividade 4',		'faltas': '%d',		'nota': '%.1f'},\n]", estudantes[i].qntFalta1, estudantes[i].nota1, estudantes[i].qntFalta2, estudantes[i].nota2, estudantes[i].qntFalta3, estudantes[i].nota3, estudantes[i].qntFalta4, estudantes[i].nota4);
    
	fclose(arquivo);	
	return i;
}
/*------------------------------------------------*/
/*------------------GRAFICO 1.2 -----------------*/
/*----------------------------------------------*/
void arquivo0102(FILE *arquivo, estudante estudantes[41], int posicao){	
  	int somaFalta = estudantes[posicao].qntFalta1;
  	int somaFalta2 = estudantes[posicao].qntFalta1 + estudantes[posicao].qntFalta2;
  	int somaFalta3 = estudantes[posicao].qntFalta1 + estudantes[posicao].qntFalta2 + estudantes[posicao].qntFalta3;
  	int somaFalta4 = estudantes[posicao].qntFalta1+ estudantes[posicao].qntFalta2 + estudantes[posicao].qntFalta3+ estudantes[posicao].qntFalta4;
  		  	
  	float somaNota = estudantes[posicao].nota1;
  	float somaNota2 = estudantes[posicao].nota1 + estudantes[posicao].nota2;
  	float somaNota3 = estudantes[posicao].nota1 + estudantes[posicao].nota2 + estudantes[posicao].nota3;
  	float somaNota4 = estudantes[posicao].nota1 + estudantes[posicao].nota2 + estudantes[posicao].nota3 + estudantes[posicao].nota4;
  	
	arquivo = fopen("grafico12.ts", "w");	
  	if(arquivo == NULL){
		printf("Erro na abertura do arquivo!");
  	}
  	
  	fprintf(arquivo, "export default [\n	{ 'name': 'Atividade 1',			'faltas': '%d',		'nota': '%.1f'},\n	{ 'name': 'Atividade 2',		'faltas': '%d',		'nota': '%.1f'},\n	{ 'name': 'Atividade 3',		'faltas': '%d',		'nota': '%.1f'},\n	{ 'name': 'Atividade 4',		'faltas': '%d',		'nota': '%.1f'},\n]", somaFalta, somaNota, somaFalta2, somaNota2, somaFalta3, somaNota3, somaFalta4, somaNota4);
   
	fclose(arquivo);
}
/*------------------------------------------------*/
/*------------------GRAFICO 2.0 -----------------*/
/*----------------------------------------------*/
void arquivo2(FILE *arquivo, estudante estudantes[41], int posicao){
  	int i=posicao, j=0;
  	float media1=0, media2=0, media3=0, media4=0;
  	
  	for(j=1; j<=40; j++){
  		media1=media1+estudantes[j].nota1;
  		media2=media2+estudantes[j].nota2;
  		media3=media3+estudantes[j].nota3;
  		media4=media4+estudantes[j].nota4;
	}
	
	media1 = media1/40;
	media2 = media2/40;
	media3 = media3/40;
	media4 = media4/40;
  	
	arquivo = fopen("grafico2.ts", "w");	
  	if(arquivo == NULL){
		printf("Erro na abertura do arquivo!");
  	}
  	
  	fprintf(arquivo, "export default [\n	{ 'name': 'Atividade 1',		'turma': '%.1f',		'estudante': '%.1f'},\n	{ 'name': 'Atividade 2',		'turma': '%.1f',		'estudante': '%.1f'},\n	{ 'name': 'Atividade 3',		'turma': '%.1f',		'estudante': '%.1f'},\n	{ 'name': 'Atividade 4',		'turma': '%.1f',		'estudante': '%.1f'}\n]", media1, estudantes[i].nota1, media2, estudantes[i].nota2, media3, estudantes[i].nota3, media4, estudantes[i].nota4);
  
  
	fclose(arquivo);
}
/*------------------------------------------------*/
/*------------------GRAFICO 3.0 -----------------*/
/*----------------------------------------------*/
void arquivo3(FILE *arquivo, estudante estudantes[41], int posicao){
  	int i=0, j=0;	
  	float media=0;
  	
  	for(j=1; j<=40; j++){
		  media = media + estudantes[j].nota1;
	}	
	media = media/40;  	
  	
	arquivo = fopen("grafico3.ts", "w");	
  	if(arquivo == NULL){
		printf("Erro na abertura do arquivo!");
  	}
  	
  	for(i=1; i<=40; i++){
		if(i==1) fprintf(arquivo, "export default [\n	{ 'name': 'Estudante %d',	'estudante': '%.2f',	'turma': '%.2f' },\n", i, estudantes[i].nota1, media);
		else if(i==40) fprintf(arquivo, "	{ 'name': 'Estudante %d',	'estudante': '%.2f',	'turma': '%.2f' },\n]", i, estudantes[i].nota1, media);
		else fprintf(arquivo, "	{ 'name': 'Estudante %d',	'estudante': '%.2f',	'turma': '%.2f' },\n", i, estudantes[i].nota1, media);		
	}
	
	
	fclose(arquivo);
}
/*------------------------------------------------*/
/*------------------GRAFICO 4.1 -----------------*/
/*----------------------------------------------*/
void arquivo0401(FILE *arquivo, estudante estudantes[41]){
  	int i=0;
  	
	arquivo = fopen("grafico401.ts", "w");	
  	if(arquivo == NULL){
		printf("Erro na abertura do arquivo!");
  	}
  	
	for(i=1; i<=40; i++){
		if(i==1) fprintf(arquivo, "export default [\n	{ 'y': %.1f,	'x': %d },\n", estudantes[i].nota1, estudantes[i].qntFalta1);
		else if(i==40) fprintf(arquivo, "	{ 'y': %.1f,	'x': %d }\n]", estudantes[i].nota1, estudantes[i].qntFalta1);
		else fprintf(arquivo, "	{ 'y': %.1f,	'x': %d },\n", estudantes[i].nota1, estudantes[i].qntFalta1);		
	}
   
	fclose(arquivo);
}
/*------------------------------------------------*/
/*------------------GRAFICO 4.2 -----------------*/
/*----------------------------------------------*/
void arquivo0402(FILE *arquivo, estudante estudantes[41]){
  	int i=0;
  	
	arquivo = fopen("grafico402.ts", "w");	
  	if(arquivo == NULL){
		printf("Erro na abertura do arquivo!");
  	}
  	
	for(i=1; i<=40; i++){
		if(i==1) fprintf(arquivo, "export default [\n	{ 'y': %.1f,	'x': %d },\n", estudantes[i].nota2, estudantes[i].qntFalta2);
		else if(i==40) fprintf(arquivo, "	{ 'y': %.1f,	'x': %d }\n]", estudantes[i].nota2, estudantes[i].qntFalta2);
		else fprintf(arquivo, "	{ 'y': %.1f,	'x': %d },\n", estudantes[i].nota2, estudantes[i].qntFalta2);		
	}
   
	fclose(arquivo);
}
/*------------------------------------------------*/
/*------------------GRAFICO 4.3 -----------------*/
/*----------------------------------------------*/
void arquivo0403(FILE *arquivo, estudante estudantes[41]){
  	int i=0;
  	
	arquivo = fopen("grafico403.ts", "w");	
  	if(arquivo == NULL){
		printf("Erro na abertura do arquivo!");
  	}
  	
	for(i=1; i<=40; i++){
		if(i==1) fprintf(arquivo, "export default [\n	{ 'y': %.1f,	'x': %d },\n", estudantes[i].nota3, estudantes[i].qntFalta3);
		else if(i==40) fprintf(arquivo, "	{ 'y': %.1f,	'x': %d }\n]", estudantes[i].nota3, estudantes[i].qntFalta3);
		else fprintf(arquivo, "	{ 'y': %.1f,	'x': %d },\n", estudantes[i].nota3, estudantes[i].qntFalta3);		
	}
   
	fclose(arquivo);
}
/*------------------------------------------------*/
/*------------------GRAFICO 4.4 -----------------*/
/*----------------------------------------------*/
void arquivo0404(FILE *arquivo, estudante estudantes[41]){
  	int i=0;
  	
	arquivo = fopen("grafico404.ts", "w");	
  	if(arquivo == NULL){
		printf("Erro na abertura do arquivo!");
  	}
  	
	for(i=1; i<=40; i++){
		if(i==1) fprintf(arquivo, "export default [\n	{ 'y': %.1f,	'x': %d },\n", estudantes[i].nota4, estudantes[i].qntFalta4);
		else if(i==40) fprintf(arquivo, "	{ 'y': %.1f,	'x': %d }\n]", estudantes[i].nota4, estudantes[i].qntFalta4);
		else fprintf(arquivo, "	{ 'y': %.1f,	'x': %d },\n", estudantes[i].nota4, estudantes[i].qntFalta4);		
	}
   
	fclose(arquivo);
}


/*______________________________________________*/
/*__________________ ARQUIVO __________________*/
/*____________________________________________*/
void arquivo(estudante estudantes[41]){
	int i=0, posicao=0;
	float mediaProva1=0, mediaProva2=0, mediaTrab1=0, mediaTrab2=0;
  	FILE *arquivo;
  
	posicao=arquivo0101(arquivo, estudantes);
	arquivo0102(arquivo, estudantes, posicao);
	arquivo2(arquivo, estudantes, posicao);
	arquivo3(arquivo, estudantes, posicao);
	arquivo0401(arquivo, estudantes);
	arquivo0402(arquivo, estudantes);
	arquivo0403(arquivo, estudantes);
	arquivo0404(arquivo, estudantes);  
    
	printf("Dados gravados com sucesso!");	
} 


/*________________________________________________________*/
/*__________________ GERADOR DE FALTAS __________________*/
/*______________________________________________________*/

void gerarTurma(){
	estudante estudantes[41];
	srand(time(NULL));
	
	int i=0;
		
	for(i=1; i<=40; i++){		
		estudantes[i].nota1= randf();
		estudantes[i].qntFalta1=gerarQntFalta(estudantes[i].nota1);
		
		estudantes[i].nota2= randf();	
		estudantes[i].qntFalta2=gerarQntFalta(estudantes[i].nota2);
		
		estudantes[i].nota3= randf();	
		estudantes[i].qntFalta3=gerarQntFalta(estudantes[i].nota3);
		
		estudantes[i].nota4= randf();			
		estudantes[i].qntFalta4=gerarQntFalta(estudantes[i].nota4);
		
		estudantes[i].qntFaltaTotal= estudantes[i].qntFalta1+estudantes[i].qntFalta2+estudantes[i].qntFalta3+estudantes[i].qntFalta4;
	}
	
	arquivo(estudantes);	
}

int main(void){
	gerarTurma();
}
