const {disassembleHangul} = require('./hangul_disassemble');

describe('hangul_disasssemble', () => {
    it('should disassemble hangul properly', () => {
        expect(disassembleHangul('아버지')).toBe('ㅇㅏㅂㅓㅈㅣ');
        expect(disassembleHangul('어머니')).toBe('ㅇㅓㅁㅓㄴㅣ');
    })
});
