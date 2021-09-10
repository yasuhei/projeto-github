#PROJETO GITHUB GOSTACK-ROCKETSEAT


# Aula 1

Nessa aula, demos inicio com o o create-react-app, limpamos todos os arquivos que não utilizamos apos a instalação.

Dentro da pasta src criamos as primeiras pages da aplicação, com Dashboard e repository, 

Fizemos a rota das paginas utilizando algumas importações do react como o switch, assim que encontrar a primeira rota que corresponda ao caminho, ele não procurará outras correspondências. 


# Aula 2

Nessa aula, comecamos a utilizar o styled components, fizemos um componente global para remover as estilizações padrões como margin, padding, box-sizing etc.. 

Importamos a nossa logo e uma imagem de background para a página inicial.

![background](https://github.com/yasuhei/projeto-github/blob/main/background.jpg)


# aula 3

Nessa aula demos continuidade na página dashboard, adicionamos plugins de estilização como o POLISHED e importamos o shade para fazer um sombreamento na cor do botão e o plugin de icones do React e importamos o FICHEVRONRIGHT  que é aquela setinha. 

![background 2](https://github.com/yasuhei/projeto-github/blob/main/aula%203.jpg)


# aula 4

Nessa aula, consumimos a api do github através do metodo get, com a função assincrona,  criamos uma inteface com as principais chaves, validamos o formulario para guardar seus dados e retornar com os dados vindo da api github.

![background 4](https://github.com/yasuhei/projeto-github/blob/main/aula4.jpg)


# aula 5
Nessa aula fizemos alguns tratamentos de erros na aplicação como o try catch, usamos o hasError no formulario caso o cliente digitasse um nome inválido, vai aparecer uma mensagem de erro, e também estilizamos o botão com uma borda vermelha mostrando que a busca esta errada.

![background 5](https://github.com/yasuhei/projeto-github/blob/main/aula5.jpeg)


# aula 6

Nessa aula, usamos o localStorage para que nossos dados não se percam quando atualizamos a pagina, fizemos isso com o uso do useEffect salvando a alteração do repositories, primeiro transformamos os dados em uma string, depois criamos uma const para o storage e chamamos de storageRepositories e transformamos novamente a informação em um array, fizemos também um if caso o storage estivesse preenchido retornar um json com os dados e se não tivesse preenchido retornar vazio.

![background 6](https://github.com/yasuhei/projeto-github/blob/main/aula%206.jpeg)



# aula 7

Nessa aula fizemos a parte de navegação entre as rotas, importamos de dentro do react-router-dom o useRouteMatch na index de repository e de dentro do useRouteMatch importamos o params, fizemos a interface para que o typescrip reconhecesse quando usamos o params.repository. 
 Na index da Route passamos o parâmetro  da rota nesse formato  <Route path='/repositories/:repository+' component={Repository}/>, esse + sigfinica que oque vier após /:repository não seja outro parâmetro e sim a continuidade da informação da rota.
 
 ![background 7](https://github.com/yasuhei/projeto-github/blob/main/aula%207.jpeg)

 # aula 8
 
 Nessa ultima ala, terminamos de consumir a api do github, trazendo todas as issues quando solicitada, e também finalizamos a estilização.
 
 Minha melhoria vai ser colocar um botão de remover em cada issue, para melhor organização visual.
 
 ![background 8](https://github.com/yasuhei/projeto-github/blob/main/api%208.jpeg)
 
 
