let personnage = {
    nom:"Georges",
    lieu:"Bruxelles",
    argent: 100,
    mainDroite:[],
    mainGauche:[],
    seDéplacer:(lieu),
    payerArticle:(article),
    couper:(ingrédient, outil),
}


//maison
let maison = {
    nom:"Maison de Georges",
    personnes:["Stephanie", "Ian", "Nora", "Henry"],
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

let oeufs = new Ingrédients ("oeufs", ["entier", "battu"], 1)
let oignon = new Ingrédients ("oignon", ["entier", "coupé"], 2)
let fromage = new Ingrédients ("fromage", ["entier", "coupé"], 3)
let epice = new Ingrédients ("epice", ["entier", "moulu"], 0.5)


// epicerie 

let epicerie = {
    nom: "Chez Tom l'epicerie",
    personnes = ["Tomson", "Gerald", "Amber", "Marth"],
    paniers = [],
    ingrédients = [oeufs, oignon, fromage, epice]
}


//poêle 
let poêle = {
    nom: "pôele",
    contenu:[],
    cuire:(),
}


// objet bol
let bol = {
    contenu: [],
    melanger:(nomDuMelange),
}

// Début de l'omelette 

console.log(personnage.nom + "est actuellement à" + personnage.lieu)
