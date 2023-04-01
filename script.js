window.addEventListener("load", init);
const OBJ = {
  nev: "Gipsz Jakab",
  cim: "Fő utca 2",
  telefon: 123 - 4567,
  email: "mail@valami.hu",
};
const OBJ2 = {};

function init() {
  const GOMB = document.getElementById("ok");
  const GOMB2 = document.getElementById("ok2");
  GOMB.addEventListener("click", kattint);
  GOMB2.addEventListener("click", kattint2);
  const CIM = document.getElementById("cim");
  const TEL = document.getElementById("tel");
  const EMAIL = document.getElementById("email");
  const SECTION = document.getElementById("section");
}
function kattint() {
  const SECTION = document.getElementById("section");
  for (const key in OBJ) {
    SECTION.innerHTML += OBJ[key];
  }
}
function kattint2() {
  const NEV = document.getElementById("nev");
  const CIM = document.getElementById("cim");
  const TEL = document.getElementById("tel");
  const EMAIL = document.getElementById("email");
  const SECTION = document.getElementById("section");
  OBJ2.nev = NEV.value;
  OBJ2.email = EMAIL.value;
  OBJ2.cim = CIM.value;
  OBJ2.tel = TEL.value;
  for (const key in OBJ2) {
    SECTION.innerHTML += OBJ2[key];
  }
}
