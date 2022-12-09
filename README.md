#########################
O projeto conta com dois scripts de banco um Oracle(SQL92) e um Postgres(SQL99), o script Oracle como um extra conta com o create table 
e a adição de todas as constraints necessárias, o script em Postgres conta com o comando de criar database, criar schema 
e o create table com todas as contraints necessárias para o projeto, lembrando que os comandos
create database e create schema não podem ser utilizados em querys que já estejam em transação. 
O banco em Postgres foi o utilizado para desenvolvimento do código afetando estrutura interna da api de entidade por conta dos schemas.
Se for se utilizar de outros bancos como o Oracle ou o MySql é necessário o ajuste no arquivo post.entity.ts para a retirada do paramêtro
de schema da annotation @Entity.
#########################

#########################
Para iniciar a api, primeiro navegue para API com:
cd api

Então navegue para post_api com:
cd post_api

Instale as dependências com:
npm i

Para configurar o banco de dados:
Altere os segredos no arquivo .env.local localizado dentro da pasta post_api nesta determinada ordem:
-PORT: Para a porta onde a api irá rodar.
-DB_HOST: Para o host de seu banco de dados.
-DB_PASSWORD: Para a senha de seu banco de dados.
-DB_DATABASE: Para o nome de seu banco de dados.

Então altere no arquivo database.providers.ts que está localizado na pasta database que se encontra dentro de src os campos:
-type: Para o tipo do banco de dados a ser consumido.
-port: Para a porta na qual o banco de dados está rodando.

Após ajustar o banco de dados volte ao terminal na camada post_api e rode o comando:
npm run start:local (Para subir o servidor com watcher que detecta mudanças no código e sobe o servidor novamente após mudanças feitas.)
ou 
npm run start:debugLocal (Para subir o servidor com o ambiente de debug.)
#########################

#########################
Para iniciar o projeto web, navegue até a pasta web com: 
cd web

Instale as dependências com:
npm i

E inicie o projeto com:
npm start
#########################

#########################
O projeto conta com uma pasta chamada insomnia onde existe uma coleção de requests exportada para maior facilidade na hora de executar testes.
#########################