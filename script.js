//Exo1

// for(let i = 0; i < 5; i++){
//     console.log("Mihai");
//     console.log("Le tour numéro",i);
// }

//Exo2
// let eleves = ["Yassine","Ilyas","Mohammed"];

// for(let i = 0; i < eleves.length ;i++){
//     console.log("Bonjour" +" "+ eleves[i])
// }

//Exo1
// let nbrmax = +prompt("Donne un nombre maximal");
// for(let i = 0; i <= nbrmax; i+=2){
//     console.log(i);
// }

//Exo2
// let nbrmax = +prompt("Donne un nombre maximal");
// for (let i = 0; i <= nbrmax;i++ ){
//     if(i % 2 ===0){
//         console.log("Le chiffre est paire" +" "+ i)
//     }
// }

//Exo3

// let eleves = ["Alexis", "Loic", "Mohammed", "Yassin", "Issam", "Mihai", "Oussama"," Dorian", "Tania", "Anthony", "Junior", "Kevin", "Andy", "Cheb Khaled", "The Kairi 78", "Arouf gangsta le plus beau de tout les rebeux"];
// let pair = [];
// let impair = [];

// for (let i = 0; i < eleves.length ; i++){
//     if (i % 2 == 0){
//         console.log(`${eleves[i]} son index est pair`)
//     } else {
//         console.log(`${eleves[i]} son index est impair`)
//     }
// }

// eleves.forEach(e => {
//     if (eleves.indexOf(e) % 2 ==0){
//         pair.push(e)
//     }
//     else{
//         impair.push(e)
//     }
// });

// let arr = ["Pourquoi","Tu","Me","Casses","Les","Couilles"] Deuxième façon de le faire.

// let paire = [];
// let impaire = [];

// arr.forEach((e, i) => {
//     if (i%2 ==0){
//         console.log(e + "Son index es paire");
//         paire.push(e);
//     } else {
//         console.log(e + "son index est impaire");
//         impaire.push(e);
//     }
// });

// console.log(paire, impaire);

// console.log(pair);
// console.log(impair);
// eleves.forEach(e => {
// eleves.indexOf(e) % 2 == 0 ? console.log("L'étudiant" +" " + e + " "+  "est paire") : console.log("L'étudiant"+" " + e +" "+  "est impaire");

// });

// let prenoms = [
//   "Alexis",
//   "Loic",
//   "Mohammed",
//   "Yassin",
//   "Issam",
//   "Mihai",
//   "Oussama",
//   "Dorian",
//   "Tania",
// ];

// prenoms.forEach(e => {
//     console.log(e);
// });

// prenoms.forEach(e =>{
//     console.log(e[0]);
// })

// prenoms.forEach(e =>{
//     console.log(e[1]);
// })

// prenoms.forEach(e => {
//     console.log(e[1] + e)
// })

// prenoms.forEach((e) => {
//   if (prenoms.indexOf(e) % 2 == 0) {
//     console.log(e);
//   }
// });

// let prenoms = [
//   "alexis",
//   "loic",
//   "mohammed",
//   "yassin",
//   "issam",
//   "mihai",
//   "oussama",
//   "dorian",
//   "tania",
// ];

// prenoms.forEach(e => {
//     if (prenoms.indexOf(e) % 2 == 1){
//         console.log(e.toUpperCase());
//     }
// })

// prenoms.forEach(e => {
//     if (prenoms.indexOf(e) % 2 == 0){
//         console.log(e.charAt(0).toUpperCase() + e.slice(1));
//     }
// })

// prenoms.forEach(e => {
//     if (prenoms.indexOf(e) % 2 == 1 && e.length >= 4){
//         console.log(e);
//     }
// })

// prenoms.forEach(e => {
//     if (prenoms.indexOf(e) % 2 == 0 && e.length >= 4){
//         console.log(e[1].toUpperCase());
//     }
// })

// prenoms.forEach(element => {
//     if(element.charAt(0) == 'a' || element.charAt(0) == 'e' || element.charAt(0) == "m" || element.charAt(0) == "f" || element.charAt(0) == "y" || element.charAt(0) == "n" ){
//         console.log(element);
//     }
// });

let prenoms = [
"alexis",
"loic",
"mohammed",
"yassin",
"issam",
"mihai",
"oussama",
"dorian",
"tania",
];


// prenoms.forEach(element => {
//     if((element.charAt(0) == 'a' || element.charAt(0) == 'e' || element.charAt(0) == 'm' || element.charAt(0) == 'f' || element.charAt(0) == 'y' || element.charAt(0) == 'n') && element.length > 5){
//         console.log(element);
// }
// });

//Exo 4

// prenoms.forEach(e => {
//     if((e.charAt(0) == "a" || e.charAt(0) == "e" || e.charAt(0) == "m" || e.charAt(0) == "f" || e.charAt(0) == "y" || e.charAt(0) == "n") && e.length < 5){
//         console.log(e[0].toUpperCase() + e.slice(1));
//     }
// });

// prenoms.forEach(e => {
//     if(e.length > 4 && (prenoms.indexOf(e) % 2 == 1 ) && (e.charAt(0) == "k" || e.charAt(0) == "c" || e.charAt(0) == "m" || e.charAt(0) == "f" || e.charAt(0) == "y" || e.charAt(0) == "n" || e.charAt(0) == "a" || e.charAt(0) == "e" || e.charAt(0) == "p" || e.charAt(0) == "o" )){
//         console.log(e);
//     }
// });

// prenoms.forEach(e => {
//     if(e.length > 5 && (prenoms.indexOf(e) % 2 == 0 ) && (e.charAt(0) == "k" || e.charAt(0) == "c" || e.charAt(0) == "m" || e.charAt(0) == "f" || e.charAt(0) == "y" || e.charAt(0) == "n" || e.charAt(0) == "a" || e.charAt(0) == "e" || e.charAt(0) == "p" || e.charAt(0) == "o" )){
//         console.log(e[0] + e[1].toUpperCase() + e.slice(2, (e.length-1)) + e[(e.length-1)].toUpperCase());
//     }
// });


//Exercice 4 partie 3
let tab = ["Alexis", "Loic", "Mohammed", "Yassin", "Issam", "Mihai", "Oussama", "Dorian", "Tania", "edwaerd", "edwaerddaz"];
let boite = [];
tab.forEach((e, i) => {
    // if ((e.charAt(0).toLowerCase() === "a" || e.charAt(0).toLowerCase() === "e" || e.charAt(0).toLowerCase() === "m" || e.charAt(0).toLowerCase() === "f" || e.charAt(0).toLowerCase() === "y" || e.charAt(0).toLowerCase() === "n") && e.length < 5) {
    //     console.log(e.charAt(0).toUpperCase()+e.substr(1));
    // }
    // else if ((e.charAt(0).toLowerCase() === "k" || e.charAt(0).toLowerCase() === "c" || e.charAt(0).toLowerCase() === "m" ||e.charAt(0).toLowerCase() === "f" || e.charAt(0).toLowerCase() === "y" || e.charAt(0).toLowerCase() === "n" || e.charAt(0).toLowerCase() === "a" || e.charAt(0).toLowerCase() === "e" || e.charAt(0).toLowerCase() === "p" || e.charAt(0).toLowerCase() === "o") && i%2 == 1 && e.length > 4) {
    //     console.log(e);
    // }
    // else if ((e.charAt(0).toLowerCase() === "k" || e.charAt(0).toLowerCase() === "c" || e.charAt(0).toLowerCase() === "m" ||e.charAt(0).toLowerCase() === "f" || e.charAt(0).toLowerCase() === "y" || e.charAt(0).toLowerCase() === "n" || e.charAt(0).toLowerCase() === "a" || e.charAt(0).toLowerCase() === "e" || e.charAt(0).toLowerCase() === "p" || e.charAt(0).toLowerCase() === "o") && i%2 == 0 && e.length > 5) {
    //     console.log(e.charAt(0).toLowerCase()+e.charAt(1).toUpperCase()+ e.substring(2, e.length-1) + e.charAt(e.length-1).toUpperCase());
    // }
    if ((e.charAt(0).toLowerCase() == "k" || e.charAt(0).toLowerCase() == "m" ||e.charAt(0).toLowerCase() == "f" || e.charAt(0).toLowerCase() == "y" || e.charAt(0).toLowerCase() == "n" || e.charAt(0).toLowerCase() == "a" || e.charAt(0).toLowerCase() == "e" || e.charAt(0).toLowerCase() == "o") && i%2 == 1 && e.length < 7) {
        
        boite.push(e.charAt(0).toUpperCase() + e.charAt(1).toLowerCase());
        console.log(boite);
    }
});
console.log(boite.join(""));
