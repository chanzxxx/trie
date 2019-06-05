const {disassembleHangul} = require('./hangul_disassemble');

function TrieNode(char, parent = null, isLeaf = false) {
    this.parent = parent;
    this.childs = {};
    this.isLeaf = isLeaf;
    this.word = null;
    this.char = char;
}

function Trie() {
    this.root = new TrieNode();
}

Trie.prototype.add = function (word) {
    const str = disassembleHangul(word);
    let cur = this.root;

    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);

        if (cur.childs[char] === undefined) {
            cur.childs[char] = new TrieNode(char, cur);
        }

        cur = cur.childs[char];
    }

    cur.isLeaf = true;
    cur.word = word;
};

Trie.prototype.delete = function (word) {
    const str = disassembleHangul(word);
    let cur = this.root;

    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);

        if (cur.childs[char] === undefined) {
            return;
        }

        cur = cur.childs[char];
    }

    cur.isLeaf = false;

    // 이제 부모 노드로 타고 올라가면서 자식이 없는 노드들 지워주기
    while(cur.parent) {
        if (Object.keys(cur.childs).length === 0) {
            delete cur.parent.childs[cur.char];
        }

        cur = cur.parent;
    }
};

Trie.prototype.traverseAndAddToResult = function (result, curNode) {
    if (curNode.isLeaf) {
        result.push(curNode.word)
    }

    for (let key in curNode.childs) {
        this.traverseAndAddToResult(result, curNode.childs[key]);
    }
};

Trie.prototype.search = function (word) {
    const str = disassembleHangul(word);

    let cur = this.root;

    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);

        if (cur.childs[char] === undefined) {
            return [];
        }

        cur = cur.childs[char];
    }

    const result = [];

    this.traverseAndAddToResult(result, cur);

    return result;
};

Trie.prototype.dump = function () {
    this.printNode(this.root);
};

Trie.prototype.printNode = function (node) {
    console.log('Node', node);
};

module.exports = {
    Trie,
};
