
function main() {
    const myMessage = 'Gunner Rocks!';
    let result = ''
    
    for (let i = 0; i < myMessage.length; i += 1) {
        const char = myMessage[i];

        result += `char ${ } char`;
    }

    console.log(result);
}

main()