# creando RegExp

i como flga detecta mayúsculas y minúsculas
g busquedad global
test() es un método con el cual podemos evaluar expresión regular
devuelve true o false - true si existe la coicidencia entre la expresión regular y la cadena expecificada

notación literal

```js
const regExp = /blogjavascript/i;
```

//notación de objeto
//nueva instancia

```js
const regExpObjeto = new RegExp("blogjavascript", i);
```

## Carácteres especiales

[ ] Rango de carácteres. Cualquiera de los caracteres del interior de los corchetes.
| Establece una alternativa: lo que está a la izquierda o lo que está a la derecha.
