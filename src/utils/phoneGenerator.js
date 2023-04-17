export const createPhoneNumber = (countryCode) => {
    return {
        'VN': generateVietnamPhoneNumber,
        'CN': generateChinaPhoneNumber,
        'DE': generateGermanyPhoneNumber,
        'TR': generateTurkishPhoneNumber,
    }[countryCode]() || ''
}

function generateVietnamPhoneNumber() {
    const countryCode = "+84";
    const phoneNumberLength = 9;
    const phoneNumberPrefix = ["70", "79", "77", "76", "78", "32", "33", "34", "35", "36", "37", "38", "39", "56", "58", "59", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "96", "97", "98", "99"];
    const randomPrefix = phoneNumberPrefix[Math.floor(Math.random() * phoneNumberPrefix.length)];
    const randomNumber = Math.floor(Math.random() * (10 ** (phoneNumberLength - randomPrefix.length)));
    const formattedNumber = randomNumber.toString().padStart(phoneNumberLength - randomPrefix.length, "0");
    return `${countryCode}${randomPrefix}${formattedNumber}`;
}

function generateChinaPhoneNumber() {
    const countryCode = "+86";
    const phoneNumberLength = 11;
    const phoneNumberPrefix = ["134", "135", "136", "137", "138", "139", "150", "151", "152", "157", "158", "159", "182", "183", "184", "187", "188", "130", "131", "132", "155", "156", "185", "186", "145", "147", "170", "171", "172", "173", "175", "176", "177", "178", "198", "199"];
    const randomPrefix = phoneNumberPrefix[Math.floor(Math.random() * phoneNumberPrefix.length)];
    const randomNumber = Math.floor(Math.random() * (10 ** (phoneNumberLength - randomPrefix.length)));
    const formattedNumber = randomNumber.toString().padStart(phoneNumberLength - randomPrefix.length, "0");
    return `${countryCode}${randomPrefix}${formattedNumber}`;
  }

  function generateGermanyPhoneNumber() {
    const countryCode = "+49";
    const phoneNumberLength = 10;
    const phoneNumberPrefix = ["30", "40", "69", "211", "221", "228", "231", "234", "237", "241", "251", "261", "271", "281", "291", "301", "341", "351", "361", "371", "381", "391", "421", "431", "441", "451", "461", "471", "481", "511", "521", "531", "541", "551", "561", "571", "581", "591", "611", "621", "631", "641", "651", "661", "671", "681", "691", "711", "721", "731", "741", "751", "761", "771", "781", "791", "800", "801", "802", "803", "804", "805", "806", "807", "808", "809", "821", "822", "823", "824", "825", "826", "827", "828", "829", "831", "832", "833", "834", "835", "836", "837", "838", "839", "841", "842", "843", "844", "845", "846", "847", "848", "849", "851", "852", "853", "854", "855", "856", "857", "858", "859", "861", "862", "863", "864", "865", "866", "867", "868", "869", "871", "872", "873", "874", "875", "876", "877", "878", "879", "881", "882", "883", "884", "885", "886", "887", "888", "889", "891", "892", "893", "894", "895", "896", "897", "898", "899"];
    const randomPrefix = phoneNumberPrefix[Math.floor(Math.random() * phoneNumberPrefix.length)];
    const randomNumber = Math.floor(Math.random() * (10 ** (phoneNumberLength - randomPrefix.length)));
    const formattedNumber = randomNumber.toString().padStart(phoneNumberLength - randomPrefix.length, "0");
    return `${countryCode}${randomPrefix}${formattedNumber}`;
  }

  function generateTurkishPhoneNumber() {
    const countryCode = "+90";
    const phoneNumberLength = 10;
    const phoneNumberPrefix = ["212", "216", "224", "232", "242", "252", "256", "262", "312", "322", "324", "326", "342", "352", "362", "372", "382", "388", "412", "422", "432", "444", "462", "472", "482", "505", "522", "542", "548", "552", "554", "555", "558", "562", "568", "576", "582", "594", "222", "246", "248", "258", "376", "384", "386", "388", "416", "424", "426", "428", "446", "464", "466", "468", "472", "474", "476", "478", "482", "484", "488", "536", "544", "546", "562", "564", "566", "582", "592", "594", "222", "246", "248", "258", "376", "384", "386", "388", "416", "424", "426", "428", "446", "464", "466", "468", "472", "474", "476", "478", "482", "484", "488", "536", "544", "546", "562", "564", "566", "582", "592", "594"];
    const randomPrefix = phoneNumberPrefix[Math.floor(Math.random() * phoneNumberPrefix.length)];
    const randomNumber = Math.floor(Math.random() * (10 ** (phoneNumberLength - randomPrefix.length)));
    const formattedNumber = randomNumber.toString().padStart(phoneNumberLength - randomPrefix.length, "0");
    return `${countryCode}${randomPrefix}${formattedNumber}`;
  }





