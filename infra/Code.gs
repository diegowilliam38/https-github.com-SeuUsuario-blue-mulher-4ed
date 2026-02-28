/**
 * CODE.GS - Google Apps Script para Blue Mulher 4ª Edição
 * Endpoint recebedor do formulário com suporte a Upload Local e Drive Automático
 */

function doPost(e) {
  try {
    if (typeof e !== 'undefined' && e.postData && e.postData.contents) {
      var data = JSON.parse(e.postData.contents);
      
      // Validação LGPD
      if (data.lgpd_consentimento !== "on" && data.lgpd_consentimento !== true) {
         return ContentService.createTextOutput(JSON.stringify({"status": "error", "message": "Consentimento LGPD pendente"}))
          .setMimeType(ContentService.MimeType.JSON);
      }
      
      var sheetName = (data.tipo_inscricao === 'pitch') ? 'Pitch' : 'Plateia';
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = ss.getSheetByName(sheetName);
      
      // Se a aba não existir, cria dinamicamente
      if (!sheet) {
        sheet = ss.insertSheet(sheetName);
        if (sheetName === 'Plateia') {
          sheet.appendRow(['Timestamp', 'Nome', 'E-mail', 'WhatsApp', 'LGPD Consentimento']);
        } else {
          sheet.appendRow(['Timestamp', 'Nome', 'E-mail', 'WhatsApp', 'Instagram', 'Resumo Executivo', 'Logo URL', 'Foto 1 URL', 'Foto 2 URL', 'LGPD Consentimento']);
        }
        sheet.setFrozenRows(1);
        sheet.getRange(1, 1, 1, sheet.getLastColumn()).setFontWeight("bold");
      }
      
      var timestamp = new Date();
      var row = [];
      
      if (data.tipo_inscricao === 'plateia') {
        row = [
          timestamp,
          data.nome || "",
          data.email || "",
          data.telefone || "",
          "SIM"
        ];
      } else if (data.tipo_inscricao === 'pitch') {
        
        // Processa os arquivos enviados em Base64 salvando na Pasta "Blue_Mulher_Uploads" do Drive
        var logoUrl = saveFileToDrive(data.logo, (data.instagram_empresa + "_Logo").replace(/[^a-z0-9]/gi, '_'));
        var foto1Url = saveFileToDrive(data.foto1, (data.instagram_empresa + "_Foto1").replace(/[^a-z0-9]/gi, '_'));
        var foto2Url = saveFileToDrive(data.foto2, (data.instagram_empresa + "_Foto2").replace(/[^a-z0-9]/gi, '_'));

        row = [
          timestamp,
          data.nome || "",
          data.email || "",
          data.telefone || "",
          data.instagram_empresa || "",
          data.resumo_executivo || "",
          logoUrl,
          foto1Url,
          foto2Url,
          "SIM"
        ];
      }
      
      sheet.appendRow(row);
      
      return ContentService.createTextOutput(JSON.stringify({"status": "success"}))
        .setMimeType(ContentService.MimeType.JSON);
    } else {
      return ContentService.createTextOutput(JSON.stringify({"status": "error", "message": "No data received"}))
        .setMimeType(ContentService.MimeType.JSON);
    }
  } catch (err) {
    Logger.log(err.toString());
    return ContentService.createTextOutput(JSON.stringify({"status": "error", "message": err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Utilitário para salvar base64 no Google Drive em Pasta Automática
 */
function saveFileToDrive(fileObj, customName) {
  if (!fileObj || !fileObj.data) return "Nenhum arquivo";
  try {
    var folderName = "Blue_Mulher_Uploads";
    var folders = DriveApp.getFoldersByName(folderName);
    var folder = folders.hasNext() ? folders.next() : DriveApp.createFolder(folderName);
    
    // Converte o base64 para Blob
    var blob = Utilities.newBlob(Utilities.base64Decode(fileObj.data), fileObj.mimeType, customName);
    var file = folder.createFile(blob);
    
    // Libera a permissão de visualização para a Curadoria abrir fácil o link na Planilha
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    
    return file.getUrl();
  } catch(e) {
    return "Erro no Upload: " + e.toString();
  }
}

// Responde a requisições OPTIONS para habilitar CORS (Cross-Origin Resource Sharing)
function doOptions(e) {
  var response = ContentService.createTextOutput();
  response.setMimeType(ContentService.MimeType.TEXT);
  return response;
}
