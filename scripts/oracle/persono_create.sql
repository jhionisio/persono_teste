CREATE TABLE T_PER_POST (
    ID_POST              NUMBER,
    DS_TITLE             NUMBER(3),
    NM_AUTHOR       	 VARCHAR2(50),
    DS_CONTENTS          VARCHAR2(200),
    NM_CATEGORY          VARCHAR2(25),
    DT_CREATED_AT        DATE
);

ALTER TABLE T_PER_POST ADD CONSTRAINT PK_PER_POST
PRIMARY KEY (ID_POST);

ALTER TABLE T_PER_POST
MODIFY ( DS_TITLE CONSTRAINT CK_T_PER_POST_TITLE_ST_NN NOT NULL);
ALTER TABLE T_PER_POST
MODIFY ( NM_AUTHOR CONSTRAINT CK_T_PER_POST_AUTHOR_ST_NN NOT NULL);
ALTER TABLE T_PER_POST
MODIFY ( DS_CONTENTS CONSTRAINT CK_T_PER_POST_CONTENTS_ST_NN NOT NULL);
ALTER TABLE T_PER_POST
MODIFY ( NM_CATEGORY CONSTRAINT CK_T_PER_POST_CATEGORY_ST_NN NOT NULL);
ALTER TABLE T_PER_POST
MODIFY ( DT_CREATED_AT CONSTRAINT CK_T_PER_POST_CREATED_AT_ST_NN NOT NULL);

COMMENT ON COLUMN T_PER_POST.ID_POST IS
    'Esse atributo irá receber a chave primária do post. Esse número é sequencia e gerado automaticamente pelo sistema. Seu conteúdo é obrigatório.';
COMMENT ON COLUMN T_PER_POST.DS_TITLE IS
    'Esse atributo irá receber o título referente ao post. Seu conteúdo é obrigatório.';
COMMENT ON COLUMN T_PER_POST.NM_AUTHOR IS
    'Esse atributo irá receber o nome do autor do post. Seu conteúdo é obrigatório.';
COMMENT ON COLUMN T_PER_POST.DS_CONTENTS IS
    'Esse atributo irá receber o conteúdo do post. Seu conteúdo é obrigatório.';
COMMENT ON COLUMN T_PER_POST.NM_CATEGORY IS
    'Esse atributo irá receber a categoria do post. Seu conteúdo é obrigatório.';
COMMENT ON COLUMN T_PER_POST.DT_CREATED_AT IS
    'Esse atributo irá armazenar a data do post. Seu conteúdo é obrigatório.';
    
CREATE SEQUENCE SQ_T_PER_POST START WITH 1 NOCACHE ORDER;

CREATE OR REPLACE TRIGGER TR_T_PER_POST BEFORE
    INSERT ON T_PER_POST
    FOR EACH ROW
    WHEN ( new.ID_POST IS NULL )
BEGIN
    :new.ID_POST := SQ_T_PER_POST.nextval;
END;
/
