## Body Json Format

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

## endpoints

* GET http://127.0.0.1:8080/api/planets list all planets
* POST http://127.0.0.1:8080/api/planets create new planet
* GET http://127.0.0.1:8080/api/planets/{id} retrieve a single planet
* PUT http://127.0.0.1:8080/api/planets/{id} update a single planet
* DELETE http://127.0.0.1:8080/api/planets/{id} delete a single planet

