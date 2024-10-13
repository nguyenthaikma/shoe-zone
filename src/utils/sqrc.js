import cryptoJs from "crypto-js";
import EC from 'elliptic';
import { PRIVATE_KEY_BUYER, PUBLIC_KEY_MERCHANT } from "./genegate-key";

export const hashData = (data) => {
    const dataString = JSON.stringify(data);
    const dataMD = cryptoJs.SHA256(dataString).toString();
    return dataMD
}

export const signData = (data) => {
    const ec = new EC.ec('secp256k1');
    const key = ec.keyFromPrivate(PRIVATE_KEY_BUYER);

    const dataString = typeof data === 'object' ? JSON.stringify(data) : data;
    // Băm dữ liệu
    const hashedData = hashData(dataString);

    const signature = key.sign(hashedData).toDER('hex');
    return signature;
};

export const createDataHash = (pimd, oi) => {
    const data = { PIMD: pimd, OI: oi };
    const dataString = JSON.stringify(data);
    const S = cryptoJs.SHA256(dataString).toString();
    return S;
};

export const verifySignature = (
    data,
    signature,
) => {
    const ec = new EC.ec('secp256k1');
    const key = ec.keyFromPublic(PUBLIC_KEY_MERCHANT, 'hex');

    const dataString = typeof data === 'object' ? JSON.stringify(data) : data;
    const hashedData = hashData(dataString);

    return key.verify(hashedData, signature);
};