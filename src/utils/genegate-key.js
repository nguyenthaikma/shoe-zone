
import EC from 'elliptic';

export const PUBLIC_KEY = '04624666a95f14576337b808df707ed678a1fab0d43629f01b901efe4e820db97b31e65893b4c164670e22fa7b92882b80fd0a69c81be8fd921ade2371c75b8d8d'
export const PRIVATE_KEY = '37f47579fc9c270d24e87117a52aa3e79927e9085c41c55f663a0444cddbb17b'
export const SECRET_KEY = '8e6dd35dc0bc5b359af904e8f1c6a5a4d1ce349ebbc012e4dae3a614a49fe430'

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
