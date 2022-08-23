// import { fetchData } from "@scripts/helpers";
import Alpine from "alpinejs";
import "./pages/00-index/styles/_00-index.scss";
import "./pages/00-index/scripts/00-index";
import "./assets/styles/main.scss";

// ------------------------------------------------------------------- Global variables declaration
// const googleScriptID = "AKfycbxNuOFHHktF1AupL_mibVERIY2CBiaMYhl4mp6jhvLEsjVDR3tCEeKu6GtFlF4NkEV1Dw";
// const googleAPIURL = `https://script.google.com/macros/s/${googleScriptID}/exec`;
// let jmaytaPublicInfo = "";

// // -------------------------------------------------------------------------------------- Functions
// function parseDataRange(dateStart, dateEnd) {
//   const options = { month: "short", year: "numeric" };
//   const ds = new Date(dateStart).toLocaleDateString(navigator.language, options);
//   const de = new Date(dateEnd).toLocaleDateString(navigator.language, options);
//   return `${ds} - ${de}`;
// }

// function parseDate(date) {
//   const options = { month: "long", year: "numeric" };
//   const d = new Date(date).toLocaleDateString(navigator.language, options);
//   return `${d}`;
// }

// function txtToArray(text, symbol) {
//   const arrTxt = text.split(symbol);
//   return arrTxt;
// }

// ------------------------------------------------------------------------------------------- Core
// async function main() {
//   if (sessionStorage.getItem("jmaytaPublicInfo")) {
//     jmaytaPublicInfo = JSON.parse(sessionStorage.getItem("jmaytaPublicInfo"));
//   } else {
//     jmaytaPublicInfo = await fetchData(googleAPIURL);
//     sessionStorage["jmaytaPublicInfo"] = JSON.stringify(jmaytaPublicInfo);
//   }
// }

// ------------------------------------------------------------------------------------- Excecution
//main().then(() => {
// Alpine.data("app", function () {
//   return {
//     jmayta: {},
//     contactInfo: {},
//     mainInfo: {},
//     humanizeDateRange: parseDataRange,
//     humanizeDate: parseDate,
//     txtToArray: txtToArray,

//     init() {
//       this.jmayta = jmaytaPublicInfo;
//       const [main] = jmaytaPublicInfo.main;
//       const [contact] = jmaytaPublicInfo.contact;
//       this.mainInfo = main;
//       this.contactInfo = contact;
//     },
//   };
//});

// Alpine should be run after all uses relatives to it.
//   window.Alpine = Alpine;
//   window.Alpine.start();
// });
