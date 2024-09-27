
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
