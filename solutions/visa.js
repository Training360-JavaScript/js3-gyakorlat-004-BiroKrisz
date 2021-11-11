const checkVisa = (visa) => {
    const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
    return visa.match(visaPattern) ? true : false;
}

export default checkVisa
