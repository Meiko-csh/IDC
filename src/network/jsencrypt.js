//rsa加密方法
import { JSEncrypt } from 'jsencrypt'

export function jsencrypt(plaintext) {
    //new一个对象
    let encrypt = new JSEncrypt();
    //后台给的公钥
    encrypt.setPublicKey('MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALP25zSLCwAHVOyDI1zUU0cQwmXxyP3EMj2Vi8mS3sOpOXb271jf9k7Yd5g4LT+p3PYcuDb4FKK/B/jk2rziQxMCAwEAAQ==')
    //plaintext是要加密的数据，此处不用注意什么+号，因为rsa自己本身已经base64转码一次，不会存在+，全部都是二进制
    return encrypt.encrypt(plaintext);
}
