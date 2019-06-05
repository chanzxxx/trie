
const HANGUL_START = 0xAC00;
const HANGUL_END = 0xD7A3;
const CHOSUNG_LIST = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const JOONGSUNG_LIST = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
const JONGSUNG_LIST = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

function disassembleHangul(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);

        if (charCode >= HANGUL_START && charCode <= HANGUL_END) {
            const index = charCode - HANGUL_START;
            const chosungIndex = Math.floor(index / 21 / 28);
            const joongsungIndex = Math.floor((index - chosungIndex * 21 * 28) / 28);
            const jongsungIndex = Math.floor((index - chosungIndex * 21 * 28 - joongsungIndex * 28));

            result = result.concat(
                CHOSUNG_LIST[chosungIndex],
                JOONGSUNG_LIST[joongsungIndex],
                JONGSUNG_LIST[jongsungIndex],
            );
        } else {
            result += str.charAt(i);
        }
    }

    return result;
}

module.exports = {
    disassembleHangul
};
