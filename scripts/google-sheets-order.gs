/**
 * Google Apps Script — dán vào Extensions → Apps Script của file Sheet.
 *
 * 1. Tạo Sheet, dòng 1 header:
 *    Thời gian | Họ tên | Số điện thoại | Địa chỉ | Sản phẩm | Giá | Nguồn
 * 2. Dán code này → Save
 * 3. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy Web app URL → dán vào GOOGLE_SHEETS_WEBHOOK_URL (Vercel / .env.local)
 */

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || "{}");
    const sheet =
      SpreadsheetApp.getActiveSpreadsheet().getSheetByName("DonHang") ||
      SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || "",
      data.phone || "",
      data.address || "",
      data.product || "",
      data.price || "",
      data.source || "",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ ok: true, message: "Order webhook sẵn sàng." }),
  ).setMimeType(ContentService.MimeType.JSON);
}
