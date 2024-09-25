import CryptoJS from 'crypto-js';

// Hàm mã hóa thông tin thanh toán
export const encryptionQRValue = (transactionString, encryptionKey) => {
    const key = CryptoJS.enc.Utf8.parse(encryptionKey);  // Chuyển khóa sang định dạng Utf8
    return CryptoJS.AES.encrypt(JSON.stringify({ value: transactionString }), key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString();
}

// Hàm giải mã thông tin từ QR
export const decryptionQRValue = (encryptedData, encryptionKey) => {
    const key = CryptoJS.enc.Utf8.parse(encryptionKey);  // Chuyển khóa sang định dạng Utf8
    const bytes = CryptoJS.AES.decrypt(encryptedData, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    const json = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    return json.value;
}