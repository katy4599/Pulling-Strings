
function main(input) {
    const myMessage = 'Gunner Rocks!';
    var result = ''
    
    for (let i = 0; i < input.length; i ++) {
        result += i % 2 == 0 ? input.charAt(i).toUpperCase() : input.charAt(i);
    }
    return result
}
    var test = 'gunner rocks';
    console.log(main(test));


