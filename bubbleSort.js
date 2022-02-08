// Övning objekt och hantering av listor

let avatar1 = {
  namn: "Romeo",
  nivå: 17,
  hp: 105, // "hälsopoäng"
  mp: 36, // "magipoäng"
  styrka: 21,
  snabbhet: 23,
  vapen: [19, 22, 9, 30, 1],
  utrustning: {
      helande_brygd: 1,
      manaregenererande_brygd: 2,
  },
};

let avatar2 = {
  namn: "Tybalt",
  nivå: 30,
  hp: 216, // "hälsopoäng"
  mp: 29, // "magipoäng"
  styrka: 27,
  snannhet: 39,
  vapen: [19, 22, 9, 30, 1],
  utrustning: {
    helande_brygd: 1,
    manaregenererande_brygd: 2,
  },
};

// Ovan ser du två objekt med egenskaper (properties) och värden (values) associerade med dem.
// ----------------------------------------------------------------------------------
// 1.
//      a) Karaktärerna behöver ha ett värde som representerar sin "snabbhet". Lägg till
//        egenskapen 'snabbhet' på respektive karaktär. Låt värdet på Romeos snabbhet vara 23
//        och värdet på Tybalts vara 39 (katternas prins är kvick).
//      b) Lägg även till egenskapen utrustning på båda. Utrustning ska vara ett eget objekt
//        som håller två egenskaper med tillhörande värden:
//        helande_brygd: 1 och manaregenererande_brygd: 2.
// ----------------------------------------------------------------------------------
// 2.
//        Ni ser även att avatarerna har egenskapen "vapen". Vi kan tänka oss att det
//        representerar en samling med olika starka vapen. Ett annat sätt hade varit att lagra vapnen
//        som objekt, för att relatera ett namn till varje vapens styrka, så här:
//        vapen: { svärd: 19, kniv: 5, dolk: 13, knytnävar: 1, stiletto: 11}.
//        Men nu har vi valt att lagra det i en lista för ni ska få öva på att hantera listor.
//
//        Vi skulle vilja sortera listan med vapen manuellt. Nedan ser ni en funktion som tar in en
//        array och genomför sorteringsalgoritmen "bubble sort". Om ni under funktionen skriver
//
//        avatar1.vapen = sort_items(avatar1.vapen)

//        kommer algoritmen att sortera Romeos vapen i storleksordning med det minsta värdet först.
//        a) Ändra i algoritmen så det största värdet kommer först.
//        b) Fungerar algoritmen för andra datatyper än siffror? "Den funkar med booleans då den påstår att true är större än false"
//        c) Ändra i funktionen sort_items så att det största elementet är först.
// ----------------------------------------------------------------------------------
// Det här är algoritmen bubble sort.
function sort_items(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] < array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
avatar1.vapen = sort_items(avatar1.vapen)

// ----------------------------------------------------------------------------------
// 4. Skriv en funktion som tar emot en array och ger medelvärdet av arrayen.
// Medelvärdet ska beräknas manuellt.
// ----------------------------------------------------------------------------------
// 5. Skriv en funktion som tar emot en array och manuellt beräknar
// och returnerar det största värdet av arrayen.
// ----------------------------------------------------------------------------------
// 6. Skriv en funktion som tar emot en array och manuellt beräknar
// och returnerar det minsta värdet av arrayen.
// ----------------------------------------------------------------------------------
function medelvarde (array) {
    summa = 0
    for (let i = 0; i < array.length; i++) {
        summa = summa + array[i] 
    }
    return (summa/array.length)
}
lista = new Array(5,6,7);
medel = medelvarde(lista);

function greatestValue (array) {
      storstaVarde = array[0]
      for (let i = 0; i < array.length; i++) {
          if (storstaVarde < array[i+1]) {
              storstaVarde = array[i+1]
          }
      } 
      return (storstaVarde)
 }
lista2 = [3,43,65,76];
storsta = greatestValue(lista2);

function smallestValue (array) {
    minstaVarde = array[0]
    for (let i = 0; i < array.length; i++) {
        if (minstaVarde > array[i+1]) {
            minstaVarde = array[i+1]
        }
    }
    return (minstaVarde)
}

minsta = smallestValue(lista2);

