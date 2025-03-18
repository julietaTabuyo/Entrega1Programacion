import {Auto} from "./auto"

let PrimerAuto= new Auto ("Toyota","hylux", 2025);
let SegundoAuto= new Auto("S10", "Chevrolet", 2000);
let TercerAuto= new Auto("EcoSport","Ford",2020);

console.log (`El auto${PrimerAuto.marca} ${PrimerAuto.modelo} ${PrimerAuto.anio}`);
console.log(PrimerAuto.acelerar(200));

console.log("--------------------------------------------------");

console.log (`El auto${SegundoAuto.marca} ${SegundoAuto.modelo} ${SegundoAuto.anio}`);
console.log(SegundoAuto.acelerar(120));

console.log("--------------------------------------------------");

console.log (`El auto${TercerAuto.marca} ${TercerAuto.modelo} ${TercerAuto.anio}`);
console.log(TercerAuto.frenar());

console.log("--------------------------------------------------");

console.log (`El auto${PrimerAuto.marca} ${PrimerAuto.modelo} ${PrimerAuto.anio}`);
console.log(PrimerAuto.acelerar(100));

console.log("--------------------------------------------------");


