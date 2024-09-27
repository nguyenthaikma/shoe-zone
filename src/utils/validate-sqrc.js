import React, { useState } from 'react';
import { Base64 } from 'js-base64';
import CryptoJS from 'crypto-js';
import EC from 'elliptic';

const ValidateSQRC = ({ secretKey, publicKey, data }) => {
    const [decodedData, setDecodedData] = useState('');

    const ec = new EC.ec('secp256k1');

    // Hàm giải mã private data
    const decryptPrivateData = (encryptedData) => {
        const decodedData = Base64.decode(encryptedData); // Giải mã base64
        const bytes = CryptoJS.AES.decrypt(decodedData, secretKey);
        return bytes.toString(CryptoJS.enc.Utf8); // Trả về dữ liệu gốc
    };

    // Hàm xác thực chữ ký
    const verifySignature = (publicData, encryptedPrivateData, signature) => {
        const key = ec.keyFromPublic(publicKey, 'hex');
        const data = publicData + encryptedPrivateData;
        return key.verify(data, signature);
    };

    // Hàm kiểm tra SQRC
    const validateSQRC = () => {
        try {
            const { publicData, encryptedPrivateData, signature } = data;

            // Xác thực chữ ký số
            const isSignatureValid = verifySignature(publicData, encryptedPrivateData, signature);
            if (!isSignatureValid) {
                return alert('Invalid digital signature!');
            }

            // Giải mã private data
            const originalPrivateData = decryptPrivateData(encryptedPrivateData);
            setDecodedData(`Public Data: ${publicData}, Private Data: ${originalPrivateData}`);
        } catch (error) {
            console.log('Error validating SQRC', error);
        }
    };

    return (
        <div>
            <h1>Validate Secure QR Code (SQRC)</h1>
            <button onClick={validateSQRC}>Validate SQRC</button>

            {decodedData && (
                <div>
                    <h3>Decoded Data:</h3>
                    <p>{decodedData}</p>
                </div>
            )}
        </div>
    );
};

export default ValidateSQRC;
