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

const secretKey = CryptoJS.enc.Hex.parse('955f317955394d6af1b486da77e150423bd6ad5699595c49625db77340366991');
// Hàm giải mã
export const decryptOrder = (encryptedData) => {
    try {
        const [ivHex, encryptedText] = encryptedData.split(':');
        const iv = CryptoJS.enc.Hex.parse(ivHex); // IV dạng Hex

        const decrypted = CryptoJS.AES.decrypt(encryptedData, secretKey, {
            mode: CryptoJS.mode.CBC,     // Bạn có thể điều chỉnh chế độ này nếu cần
            padding: CryptoJS.pad.Pkcs7, // Tự động xử lý padding
            iv: iv                       // Vector khởi tạo (Initialization Vector)
        });

        // Chuyển đổi dữ liệu đã giải mã thành chuỗi
        const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);

        return JSON.parse(decryptedText); // Trả về dữ liệu JSON đã giải mã
    } catch (err) {
        console.log(err)
    }
}; 
