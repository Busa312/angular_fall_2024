class StringUtilities {

    static toUpperCase(str) {
        let stringArray = str.split('');

        let result = stringArray.map(val => val.toUpperCase());

        return result.join('');
    }

    static toLowerCase(str) {
        let stringArray = str.split('');

        // 'A' -> 'a'
        let result = stringArray.map(val => val.toLowerCase());

        // ['r', 'a', 'm', 'e'] -> 'rame'
        return result.join('');
    }

    static capitalizeFirstLetter(str) {
        let result = str[0].toUpperCase();
        
        result = result + str.slice(1);
        return result;
    }

    static reverseString(str) {
        let result = str.split('').reverse().join('');

        return result;
    }
}

// console.log(StringUtilities.toUpperCase('MagaLitad rame'));
// console.log(StringUtilities.toLowerCase('MAGALITAD rame'));

// console.log(StringUtilities.capitalizeFirstLetter('isev rame'))
// console.log(StringUtilities.reverseString('isev'));