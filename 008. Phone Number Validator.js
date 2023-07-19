function validatePhoneNumber(tel) {
    return newTel = (/(\d{3})[- ]?(\d{3})[- ]?(\d{4}$)/g).test(tel);
}