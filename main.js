
function main() {
    const myMessage = 'Gunner Rocks';
    let result = '';
    
    for (let i = 0; i < myMessage.length; i += 1) {
        const char = myMessage[i];

        if ((i % 2) == 0) {
            result += char.toUpperCase();
        } else {
            result += char.toLowerCase();
        }
    }
    console.log(result);
}
    main()


