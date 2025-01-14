// projet omelette par Georges Grande

let personnage = {
    nom:"Georges",
    lieu:"",
    argent: 100,
    mainDroite:[],
    mainGauche:[],
    seDéplacer(lieu) {
        this.lieu = lieu
    },
    payerArticle(article) {
        this.article = article
        if (this.argent >= article.prix) {
            this.argent -= article.prix;
            console.log(`${personnage.nom} a payé ${article.prix} euro(s) pour un(e) ${article.nom}. Il reste ${this.argent} euros`)
        }
        else {
            console.log(`Pas assez d'argent`)
        }
    },
    couper(ingrédient, outil) {
        this.ingrédient = ingrédient;
        this.outil = outil
        if (outil.action === "couper" && ingrédient.états.includes("entier")) {
            ingrédient.états = ["coupé"];
            console.log(`${ingrédient.nom} a été coupé`)
        }
        else {
            console.log(`${ingrédient.nom} ne peut pas être coupé`)
        }
    }
}


//maison
let maison = {
    nom:"Maison de Georges",
    personnes:[],
}


// outil
let outil = {
    nom: "couteau",
    action: "couper",
}

// les produits (ingrédients)
class Ingrédients {
    constructor(nom, états, prix) {
       this.nom = nom 
       this.états = états
       this.prix = prix 
    }
}

let oeufs = new Ingrédients ("oeufs", ["entier"], 1)
let oignon = new Ingrédients ("oignon", ["entier"], 2)
let fromage = new Ingrédients ("fromage", ["coupé"], 3)
let epice = new Ingrédients ("epice", ["moulu"], 0.5)


// epicerie 

let epicerie = {
    nom: "Chez Tom l'epicerie",
    personnes: ["Tomson", "Gerald", "Amber"],
    paniers: [
        { type: "panier1", contenu: [] },
        { type: "panier2", contenu: [] },
    ],
    ingrédients: [oeufs, oignon, fromage, epice],
}


//poêle 
let poêle = {
    nom: "pôele",
    contenu:[],
    cuire() {
        setTimeout(() => {}, 4000)
        this.contenu[0] = "cuit"
    }
}


// objet bol
let bol = {
    contenu: [],
    melanger(nomDuMelange) {
        this.contenu = [{ nom: nomDuMelange, états: ["pas cuite"]}];
        console.log("Le bol contient maintenant une mélange d'omelette")
    }
}

// -------- Début de l'omelette --------------- 

// 1. se déplacer maison

personnage.seDéplacer(maison.nom)
console.log(personnage.nom + " est actuellement à " + personnage.lieu)

// 2. se déplacer à l'épicerie 

personnage.seDéplacer(epicerie.nom)
console.log(personnage.nom + " est actuellement à " + personnage.lieu)

// 3. récupère le panier à l'épicerie

let panier = epicerie.paniers.find(p => p.type === "panier1")
epicerie.paniers.splice(epicerie.paniers.indexOf(panier), 1)
personnage.mainDroite.push(panier)
console.log(`${personnage.nom} a pris un panier`)

// 4. boucle de chaque élément dans l'epicerie et le panier du personnage

for (const ingrédient of epicerie.ingrédients) {
    panier.contenu.push({...ingrédient});
    console.log(`${personnage.nom} a ajouté ${ingrédient.nom} au panier`)
    personnage.payerArticle(ingrédient)
}

// 5. retourne à la maison

personnage.seDéplacer(maison.nom)
console.log(personnage.nom + " retourne à la " + personnage.lieu)

// 6. mettre les ingrédients dans le bol

for (const ingrédient of panier.contenu) {
    bol.contenu.push(ingrédient)
    console.log(`${ingrédient.nom} on été ajouté au bol`)
}

// 7. retourne à l'épicerie pour rendre le panier

personnage.seDéplacer(epicerie.nom)
console.log(personnage.nom + " retourne au " + personnage.lieu + " pour rendre le panier")

// 8. retourne à la maison et continue de cuisinier l'omelette

personnage.seDéplacer(maison.nom)
console.log(personnage.nom + " retourne à la " + personnage.lieu + " et continue l'omelette")

for (const ingrédient of bol.contenu) {
    if (ingrédient.états.includes("entier")){
        personnage.couper(ingrédient, outil)
    }
}

// 9. mélanger le contenu du bol

bol.melanger("omelette")

// 10. vider le bol

poêle.contenu.push(bol.contenu.pop())
console.log(`Le bol est maintenant vide, la poêle contient : ${poêle.contenu[0].nom}`)

// 11. message final 

poêle.cuire()
console.log(poêle)

// console.log(personnage)
// console.log(epicerie)