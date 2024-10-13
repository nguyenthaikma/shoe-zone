
import EC from 'elliptic';


const generateSecretKey = (length = 32) => {
    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array); // Lấy số ngẫu nhiên
    return Array.from(array, byte => ('0' + byte.toString(16)).slice(-2)).join(''); // Chuyển đổi thành chuỗi hex
}

export const generateKey = () => {
    const secretKey = generateSecretKey(); // Khóa bí mật để mã hóa private data

    const ec = new EC.ec('secp256k1'); // Thuật toán elliptic curve
    const keyPair = ec.genKeyPair();
    const privateKey = keyPair.getPrivate('hex'); // Khóa riêng dưới dạng hex
    const publicKey = keyPair.getPublic('hex'); // Khóa công khai dưới dạng hex

    return { secretKey, privateKey, publicKey }
}


export const PRIVATE_KEY_BUYER = '5a6fac6f1388753de21db08c51356d3f11e484d70d3d41f9ce6e8a2b1c25a5a6'
export const PUBLIC_KEY_BUYER = '04b0bdb1584c045a88abb0fd43b314e4b93d0bafb23c1b3a41ef8ea725bf42bc7d7c6d45f29aeeab03dcaf2f2a314a0c26dfaadcfb3f147fbc5e79f738f36b7965'

// export const PRIVATE_KEY_MERCHANT = '674160e4cfc95956c40a4d514bf439d2ca873f2109480f312d66945795c9fa47'
export const PUBLIC_KEY_MERCHANT = '04c32dbe05bdd35cb1e0acf5d8612c21d20dd73bf0b77aa5fb5c1d12fe9ca86d7deb6797524f2ca5c9a5bee517574fc76f14e4edce025a4b50e63f4512b6d42d91'
export const generateKeyPair = () => {
    const ec = new EC.ec('secp256k1');

    // Tạo cặp khóa cho Buyer
    const buyerKeyPair = ec.genKeyPair();
    const buyerPrivateKey = buyerKeyPair.getPrivate('hex');
    const buyerPublicKey = buyerKeyPair.getPublic('hex');

    // Tạo cặp khóa cho Merchant
    const merchantKeyPair = ec.genKeyPair();
    const merchantPrivateKey = merchantKeyPair.getPrivate('hex');
    const merchantPublicKey = merchantKeyPair.getPublic('hex');

    console.log('Buyer Private Key:', buyerPrivateKey);
    console.log('Buyer Public Key:', buyerPublicKey);

    console.log('Merchant Private Key:', merchantPrivateKey);
    console.log('Merchant Public Key:', merchantPublicKey);

}
