// Les Streams pour lire et écrire info et flux au nv de node js
//objectif:créer un petit script capable de copier un fichier ici une vidéo


// méthode classique utilisation de l'objet fs

//let fs = require('fs') //on importe l'ojet fs

fs.readFile('demo.mp4', (err, data) => {
    if (err) throw err

    fs.writeFile('copy.mp4', data, (err) => {
        if (err) throw err
        console.log('Le fichier a bien été copié')   
    })
})

//méthode avec utilisation des fluxs pour lire élts bloc par bloc
//méthode fs.createReadStream permet de déclencher le flux de lecture
//la lecture ne se fera non pas de manière globale mais par petits morceaux

let fs = require('fs')
let file = 'demo.mp4'


//on utilise la méthode stat pour connaitre la taille globale du fichier
fs.stat(file, (err, stat) => {
    let total = stat.size
    let progress = 0

let read = fs.createReadStream(file)
    //on utilise l'èvénement Data pour écouter des données
let write = fs.createWriteStream('copy.mp4')
let write2 = fs.createWriteStream('copy2.mp4')

read.on('data', (chunk) => {
    progress += chunk.length
    console.log("J'ai lu" + Math.round/*pour arrondir*/ (100 * progress / total) + "%")
})

read.pipe(write)//pipe permet de connecter 2 streams ensemble ici les flux read et write
read.pipe(write2)

write.on('finish', () => {
    console.log('Le fichier a bien été copié')
    })

})

/*Synthèse: l'avantage de cette méthode c'est que l'on peut copier des infos volumineuses
en les découpant morceau par morceau ce qui évite un engorgement.
On peut aussi greffer plusieurs streams d'écriture à un seul stream de lecture 
ce qui évite de devoir faire la même écriture de fichier plusieurs fois*/




