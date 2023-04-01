import { KUTYAK } from "./main.js";
window.addEventListener("load", init);
function init() {
  /* console.log(KUTYAK)
   */
  let keresett = document.getElementById("szurnev");
  keresett.addEventListener("keyup", function () {
    let szurFeltetel=keresett.value;
    let szurtLista = szuresNevszerint(KUTYAK, szurFeltetel);

    console.log(szurtLista);
  });
}

function szuresNevszerint(lista, keresett) {
  let resultlist = lista.filter(function (elem) {
    return elem.nev.toUpperCase().includes(keresett.toUpperCase());
  });
  /* console.log(resultlist); */
  return resultlist;
}
