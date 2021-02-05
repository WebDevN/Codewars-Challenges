// 6 kyu
// Stop gninnipS My sdroW!

function spinWords(str){
    let split = str.split(' '),
        mapped = split.map(word => {
        if (word.length >= 5) {
            return [...word].reverse().join('')
        }
        return word
        }),
        joined = mapped.join(' ');
    return joined;
}