## Linguagem 

Node

## Banco de dados

MongoDB

## Json Format

```
{
	"name": "Tatooine",
	"climate": "arid",
	"terrain": "desert",
	"films": [ 
		"https://swapi.co/api/films/5/",
		"https://swapi.co/api/films/4/",
		"https://swapi.co/api/films/6/",
		"https://swapi.co/api/films/3/",
		"https://swapi.co/api/films/1/"
	]
}
```

## Endpoints

* GET http://127.0.0.1:8080/api/planets Listar planetas
* POST http://127.0.0.1:8080/api/planets Adicionar um planeta  
* GET http://127.0.0.1:8080/api/planets/{id} Buscar planeta por ID e exibir a quantidade de aparições em filmes
* GET http://127.0.0.1:8080/api/planets/name/{name} Buscar planeta por NOME
* PUT http://127.0.0.1:8080/api/planets/{id} Alterar um planeta
* DELETE http://127.0.0.1:8080/api/planets/{id} Deletar um planeta

