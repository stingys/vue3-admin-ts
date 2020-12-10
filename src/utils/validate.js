/**
 * 手机号验证
 * @Parma {*} value
 */
export function checkUserName (value) {
    let regPhone = /^1[23456789]\d{9}$/
    return regPhone.test(value)
  }
  /**
   * 密码验证 6-20数字+英文
   * @Parma {*} value
   */
  export function checkPassword (value) {
    let regPassword = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/
    return regPassword.test(value)
  }
  
  /**
   * 密码验证 6数字+英文
   * @Parma {*} value
   */
  export function checkCode (value) {
    let regCode = /[a-zA-Z0-9]{6}$/
    return regCode.test(value)
  }