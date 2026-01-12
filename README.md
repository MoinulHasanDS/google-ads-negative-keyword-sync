# Google Ads Negative Keyword Sheet Sync

Automate your Google Ads Negative Keyword Lists using a multi-tab Google Sheet. Each tab in your spreadsheet represents a separate Negative Keyword List in your Google Ads Shared Library.

## 🚀 How it Works
1. **Tab Names:** Each sheet tab name must exactly match a "Negative Keyword List" name in your Google Ads account.
2. **Column A:** Add your keywords to Column A of the respective tab.
3. **Match Types:** - `keyword` = Broad Match
   - `"keyword"` = Phrase Match
   - `[keyword]` = Exact Match
4. **Automation:** The script iterates through every tab, finds the matching list in Google Ads, and syncs the keywords.

## 🛠️ Setup Instructions
1. Create a Google Sheet and copy its URL.
2. In Google Ads, go to **Tools & Settings > Bulk Actions > Scripts**.
3. Create a new script and paste the code from `src/negative-keyword-sync.js`.
4. Replace `YOUR_SHEET_URL_HERE` with your actual spreadsheet URL.
5. Click **Authorize** to grant permissions.
6. Click **Preview** to test, then **Schedule** to run daily.

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
