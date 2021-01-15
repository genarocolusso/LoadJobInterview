
import moment from "moment-timezone";

export const getDate = (date, filter) => {
  moment.locale("US");
  return moment(`${date}`).tz('America/New_York').format(`${filter}`);
};

export const  numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export const  formatPhoneNumber = (phoneNumberString) => {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    var intlCode = (match[1] ? '+1 ' : '')
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
  }
  return null
}
//formatPhoneNumber('+12345678900') // => "+1 (234) 567-8900"
//formatPhoneNumber('2345678900')   // => "(234) 567-8900"