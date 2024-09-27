import { notification } from 'antd';
import CryptoJS from 'crypto-js';
import EC from 'elliptic';
import { Base64 } from 'js-base64';
import QRCode from 'qrcode';

const GenerateSQRC = async ({ secretKey, privateKey, publicData, privateData }) => {
    // Hàm ký dữ liệu bằng khóa cá nhân
    const signData = (data) => {
        const ec = new EC.ec('secp256k1');
        const key = ec.keyFromPrivate(privateKey);
        const signature = key.sign(data).toDER('hex');
        return signature;
    };

    // Hàm mã hóa private data
    const encryptPrivateData = (data) => {
        const encrypted = CryptoJS.AES.encrypt(data, secretKey).toString();
        return Base64.encode(encrypted); // Mã hóa base64 sau khi mã hóa AES
    };

    // Hàm tạo mã SQRC
    const generateSQRC = async () => {
        if (!publicData || !privateData) return notification.error({ message: 'Please enter both public and private data!' });
        try {
            // Mã hóa private data
            const encryptedPrivateData = encryptPrivateData(privateData);

            // Tạo chữ ký số
            const signedData = signData(publicData + encryptedPrivateData);

            // Kết hợp dữ liệu public, private và chữ ký số
            const qrData = {
                publicData,
                encryptedPrivateData,
                signature: signedData,
            };
            // Chuyển đối tượng qrData thành chuỗi JSON và mã hóa thành QR code
            const qrCodeUrl = await QRCode.toDataURL(JSON.stringify(qrData));

            return { qrData, qrCodeUrl }
        } catch (error) {
            console.log('🚀🚀🚀🚀 ~ generateSQRC ~ error:', error)
        }
    };


    return generateSQRC()
};

export default GenerateSQRC;
