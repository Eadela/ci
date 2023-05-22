import cryptoJs from 'crypto-js';

// 加密
// key：密钥，text：明文
export const encrypt = (text, key = '') => {
  return cryptoJs.AES.encrypt(text, key).toString();
};
// 代码打开window控制面板，输入以下代码

// 解密
// key：密钥，cipherText密文
export const decrypt = (cipherText, key = '') => {
  const bytes = cryptoJs.AES.decrypt(cipherText, key);
  return bytes.toString(cryptoJs.enc.Utf8);
};

// const key = 'abc';
// const text = 'asdd';
// const ciphertext = encrypt(text, key);
// console.log(`密文：${ciphertext}`);
// const originalText = decrypt(ciphertext, key);
// console.log(`明文：${originalText}`);
