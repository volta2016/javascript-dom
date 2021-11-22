//creando RegExp
//notación literal
//i como flga detecta mayúsculas y minúsculas
// g busquedad global

const regExp = /blogjavascript/i;
const regExpLiteral = /[as]/gi;

//notación de objeto
//nueva instancia
const regExpObjeto = new RegExp("blogjavascript", "i");

console.log(regExpLiteral.test("dasdas  blogjavascript")); //true or false
