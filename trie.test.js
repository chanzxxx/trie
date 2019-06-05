const {Trie} = require('./trie');

describe('Trie', () => {
    let trie;

    beforeAll(() => {
       trie = new Trie();
       console.log('dd');
    });

    it('should add words properly', () => {
       trie.add('dd');
       trie.add('아버지');
    });

    it('should search works properly', () => {
       expect(trie.search('d')).toMatchObject(['dd']);
       expect(trie.search('a')).toMatchObject([]);
       expect(trie.search('ㅇ')).toMatchObject(['아버지']);
       expect(trie.search('ㅁ')).toMatchObject([]);
    });

    it('should delete works properly', () => {
        trie.add('ddd');
        trie.delete('dd');
        expect(trie.search('d')).toMatchObject(['ddd']);
        trie.dump();
    });
});
