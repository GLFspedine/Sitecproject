Aqui está o projeto SITEC no 2º Semestre  
Vídeo pitch - https://www.youtube.com/watch?v=8YZvzbnLc0I  
Documentação em PDF - [SITEC - Template.pdf](https://github.com/user-attachments/files/18000257/SITEC.-.Template.pdf)    
Porwer Point - [SITEC.pptx](https://github.com/user-attachments/files/18000031/SITEC.pptx)  
Script do Banco de Dados:  
[UplUSE SQL_SITEC
CREATE TABLE ESPECIALIDADE ( 

    ID INT PRIMARY KEY, 

    TITULO VARCHAR(30), 

    DESCRICAO VARCHAR(100) 

); 

  

CREATE TABLE USUARIO ( 

    ID INT PRIMARY KEY, 

    NOME VARCHAR(80), 

    TIPO VARCHAR(30), 

    SENHA VARCHAR(30) 

); 

  

CREATE TABLE EMPRESA_GERA ( 

    ID INT PRIMARY KEY, 

    NOME VARCHAR(80), 

    CNPJ VARCHAR(18), 

    ATIVIDADE VARCHAR(100) 

); 

  

CREATE TABLE EMPRESA_FORNECE ( 

    ID INT PRIMARY KEY, 

    NOME VARCHAR(80), 

    CNPJ VARCHAR(18) 

); 

  

CREATE TABLE CERTIFICADO ( 

    ID INT PRIMARY KEY, 

    NOME_CERTIFICADO VARCHAR(50), 

    DESCRICAO VARCHAR(100), 

    DATA_EMISSAO DATE, 

    DATA_VALIDADE DATE, 

    ID_EMPRESA_GERA INT, 

    STATUS VARCHAR(30), 

    FOREIGN KEY (ID_EMPRESA_GERA) REFERENCES EMPRESA_GERA(ID) 

); 

  

  

CREATE TABLE ORCAMENTO ( 

    ID INT PRIMARY KEY, 

    DATA DATE, 

    STATUS VARCHAR(30), 

    ID_EMPRESA_GERA INT, 

    DESCRICAO VARCHAR(100), 

    FOREIGN KEY (ID_EMPRESA_GERA) REFERENCES EMPRESA_GERA(ID) 

); 

  

CREATE TABLE ESPC_EMPRESA_FORNECE ( 

    ID INT PRIMARY KEY, 

    ID_ESPECIALIDADE INT, 

    ID_EMPRESA_FORNECE INT, 

    FOREIGN KEY (ID_ESPECIALIDADE) REFERENCES ESPECIALIDADE(ID), 

    FOREIGN KEY (ID_EMPRESA_FORNECE) REFERENCES EMPRESA_FORNECE(ID) 

); 

  

CREATE TABLE ORCAMENTOS_EMPRESA_FORNECE ( 

    ID INT PRIMARY KEY, 

    ID_EMPRESA_GERA INT, 

    ID_ORCAMENTO INT, 

    FOREIGN KEY (ID_EMPRESA_GERA) REFERENCES EMPRESA_GERA(ID), 

    FOREIGN KEY (ID_ORCAMENTO) REFERENCES ORCAMENTO(ID) 

); oading Script do Banco de Dados do Projeto.sql…]()
