import crypto from 'crypto';

export default class utils {
  /**
   * 判断字符串是否为空
   * @param str
   * @returns {boolean}
   */
  static isNull(str) {
    return str == null || str.length === 0 || str === '';
  }

  /**
   *
   * @desc  判断是否为身份证号
   * @param  {String|Number} str
   * @return {Boolean}
   */
  static isIdCard(str) {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
  }

  /**
   *
   * @desc   判断是否为手机号
   * @param  {String|Number} str
   * @return {Boolean}
   */
  static isPhoneNum(str) {
    return /^(0|86|17951)?(1[3-9][0-9])[0-9]{8}$/.test(str)
  }

  /**
   *
   * @desc   hash
   * @param  {String|Number} val
   * @return {Stirng}
   */
  static hash(val) {
    const salt = 'FO2NV9JX6OIA8PO7';
    const hash = crypto.createHash('md5');
    hash.update(val + salt);
    let hashPassword = hash.digest('hex');
    return hashPassword;
  }
  /**
   *
   * @desc   函数防抖
   * @param  {String|Number} val
   * @return {Stirng}
   */
  static debounce(func, delay) {
    let timer = null;
    return function (func, delay) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  }
}

