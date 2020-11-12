#include <stdio.h>
#include <stdlib.h>

#define provaMin    (0)
#define provaMax    (3)
#define trabalhoMin    (0)
#define trabalhoMax    (2)

typedef struct{
	char nomeAluno[40];
	float nota1;
	float nota2;
	float nota3;
	float nota4;
	float media;
	int qntFalta;
}aluno;


void arquivo(aluno aluno){
  FILE *arquivo;
  
  arquivo = fopen("arquivo_palavra.txt", "a");
  
  if(arquivo == NULL){
	  printf("Erro na abertura do arquivo!");
  }
  
  fprintf(arquivo, "'%.1f'		'%.1f'		'%.1f'		'%.1f' \n", aluno.nota1, aluno.nota2, aluno.nota3, aluno.nota4);
  
  /*printf("Escreva uma palavra para testar gravacao de arquivo: ");
  scanf("%s", palavra);  
  fprintf(arquivo, "%s", palavra);*/
  
  fclose(arquivo);  
  printf("Dados gravados com sucesso!");
	
} 

double randf( double min, double max ){
    return (rand() * max / RAND_MAX);
}

void gerarTurma(){
	aluno alunos[40];
	char variavel[10][10]= {"Marisa", "Albert", "Vanessa", "Alan", "Manoela"};
	int i=0;
	float somatorio=0, media=0;
	srand(time(NULL));
	
	for(i=1; i<=40; i++){
		alunos[i].nota1= randf( provaMin, provaMax );
		alunos[i].nota2= randf( provaMin, provaMax );
		alunos[i].nota3= randf( trabalhoMin, trabalhoMax );
		alunos[i].nota4= randf( trabalhoMin, trabalhoMax );
		printf("Aluno %d : Nota1 = %.1f Nota2 = %.1f Nota3 = %.1f Nota4 = %.1f \n", i, alunos[i].nota1, alunos[i].nota2, alunos[i].nota3, alunos[i].nota4);
		media=(alunos[i].nota1 + alunos[i].nota2 + alunos[i].nota3 + alunos[i].nota4)/4;
		somatorio=somatorio+media;
		media=0;
		arquivo(alunos[i]);
	}
	
	media=media/40;
	
}

int main(void){
	gerarTurma();
}
