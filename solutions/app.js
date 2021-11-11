import checkVisa from './visa.js';
import checkMac from './mac.js'
import checkIP from './ip.js'

const checker = {
    rules : {
        checkVisa,
        checkMac,
        checkIP
    },

    validate(text, check) {
         if (check === 'visa') {
			return checkVisa(text);
		} else if (check === 'ip') {
			return checkIP(text);
		} else if (check === 'mac') {
			return checkMac(text);
		}
}
}

export default checker
