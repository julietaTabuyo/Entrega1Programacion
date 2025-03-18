"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auto_1 = require("./auto");
var PrimerAuto = new auto_1.Auto("Toyota", "hylux", 2025);
var SegundoAuto = new auto_1.Auto("S10", "Chevrolet", 2000);
var TercerAuto = new auto_1.Auto("EcoSport", "Ford", 2020);
console.log("El auto".concat(PrimerAuto.marca, " ").concat(PrimerAuto.modelo, " ").concat(PrimerAuto.anio));
console.log(PrimerAuto.acelerar(200));
console.log("--------------------------------------------------");
console.log("El auto".concat(SegundoAuto.marca, " ").concat(SegundoAuto.modelo, " ").concat(SegundoAuto.anio));
console.log(SegundoAuto.acelerar(120));
console.log("--------------------------------------------------");
console.log("El auto".concat(TercerAuto.marca, " ").concat(TercerAuto.modelo, " ").concat(TercerAuto.anio));
console.log(TercerAuto.frenar());
console.log("--------------------------------------------------");
console.log("El auto".concat(PrimerAuto.marca, " ").concat(PrimerAuto.modelo, " ").concat(PrimerAuto.anio));
console.log(PrimerAuto.acelerar(100));
console.log("--------------------------------------------------");
