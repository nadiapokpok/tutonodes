exports.hello = function(){
    console.log('Bonjour comment ça va?')
}

//pour exporter juste une partie précise du fichier on peut écrire

exports.aurevoir = function (){
    console.log('Au revoir')
}

/*exports.hello = hello
module.exports = {
    hello: hello
}
module.exports permet d'indiquer ce qui sera exporter de ce fichier
ici on dit je veux que tu exportes l' objet hello
lorsque l'on fera un require de ce fichier on va se retrouver avec une variable 
qui sera la valeur de  hello*/