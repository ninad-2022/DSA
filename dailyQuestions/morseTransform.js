const uniqueMorseRepresentations = (words) => {
    const morseCodeMap = new Map([
        ['a', ".-"], ['b', "-..."], ['c', "-.-."], ['d', "-.."], ['e', "."], ['f', "..-."],
        ['g', "--."], ['h', "...."], ['i', ".."], ['j', ".---"], ['k', "-.-"], ['l', ".-.."],
        ['m', "--"], ['n', "-."], ['o', "---"], ['p', ".--."], ['q', "--.-"], ['r', ".-."],
        ['s', "..."], ['t', "-"], ['u', "..-"], ['v', "...-"], ['w', ".--"], ['x', "-..-"],
        ['y', "-.--"], ['z', "--.."]
    ]);
    const transformations = new Set();
    for (const word of words) {
        let transformation = "";
        for (const letter of word) {
            transformation += morseCodeMap.get(letter);
        }
        transformations.add(transformation);
    }
    return transformations.size;
};
