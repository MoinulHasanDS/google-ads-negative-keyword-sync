/**
 * @name Google Ads Negative Keyword Sync
 * @version 1.0
 * @author Your Name/GitHub Username
 * * Description: 
 * Syncs negative keywords from a multi-tab Google Sheet to 
 * Google Ads Shared Negative Keyword Lists.
 */

const SPREADSHEET_URL = 'YOUR_SHEET_URL_HERE';

function main() {
  const ss = SpreadsheetApp.openByUrl(SPREADSHEET_URL);
  const allSheets = ss.getSheets();

  allSheets.forEach(function(sheet) {
    const listName = sheet.getName();
    const data = sheet.getDataRange().getValues();
    
    // Skip empty sheets
    if (data.length < 1) return;

    const listIterator = AdsApp.negativeKeywordLists()
      .withCondition(`shared_set.name = '${listName}'`)
      .get();

    if (listIterator.hasNext()) {
      const negativeList = listIterator.next();
      let addedCount = 0;

      for (let i = 0; i < data.length; i++) {
        let kwText = data[i][0].toString().trim();
        
        // Ignore headers and empty cells
        if (kwText && kwText.toLowerCase() !== "keyword" && kwText !== "") {
          negativeList.addNegativeKeyword(kwText);
          addedCount++;
        }
      }
      console.log(`List: "${listName}" | Keywords processed: ${addedCount}`);
    } else {
      console.warn(`List NOT FOUND in Ads: "${listName}". Check tab name.`);
    }
  });
}
