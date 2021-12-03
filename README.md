# ApiCaseWork

Acabei por deixar o codigo com o valor fixo de paginas que deveria pesquisar em 10 pois sempre que tentava fazer o processo todo, em algunm momento ocorria um erro de conexão com a api(500) e parava a requisição, nao sendo possivel tratar pois é um erro do lado do servidor.

Porem para deixar que o codigo corra pagina a pagina até o final é apenas necessário substituir acondição do "while" pelo que está comentado na linha 19 e liberar o validador que está comentado dentro do "else" na linha 42.