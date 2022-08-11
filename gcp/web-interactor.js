// GLOBAL VARIABLES
const spreadsheetId = "17NMHK_BFkifaBbmH2NA7nvcK7Dqrqo6zPBYoN2IgkQc";


// FUNCTIONS
function doGet(req) {
  const data = getAllSpreadSheetData(spreadsheetId);

  return ContentService
          .createTextOutput(JSON.stringify(data))
          .setMimeType(ContentService.MimeType.JSON);
}

function getAllSpreadSheetData(ssId) {
  const objectContainer = {};
  const spreadSheet = SpreadsheetApp.openById(ssId);
  // obtener todos los sheets
  const sheets = spreadSheet.getSheets();
  // si tiene sheets existentes
  if (sheets.length) {
    // iterar por cada sheet encontrado
    for (const sheet of sheets) {
      const paramToPush = sheet.getName();
      // extraer toda la información del sheet
      const allSheetData = sheet.getDataRange().getValues();
      // si sheet solo tiene una fila (row) pasar al siguiente sheet
      if (allSheetData.length > 1) {
        // si tiene más de una fila
        // guardar el {nombre del sheet} como propiedad de un objeto
        // convertir cada fila en un array de objetos y agregarlo a la propiedad creada arriba 👆
        objectContainer[sheet.getName()] = dimensionalArrayToObjectArray(allSheetData);
      }
    }
  }
  return objectContainer;
}

// Transformar dimensional array a objeto
function dimensionalArrayToObjectArray(dimensionalArray) {
  const headers = dimensionalArray.shift();
  const objectArray = [];

  for(const row of dimensionalArray) {
    const tempObj = {};
    for (let j = 0; j < row.length; j++) {
      tempObj[headers[j]] = row[j];
    }
    objectArray.push(tempObj);
  }
  return objectArray;
}
