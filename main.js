
function main() {
    //              0123456789AB
    const myName = 'Katy Millard';
    const mySplit = myName.split(' ');
    const mid = 'Janelle';
    const myFull = `Katy ${mid} Millard`;
    const mySplitReverse = mySplit.reverse().join(' ');

    console.log(myName);
    console.log(mySplit);
    console.log(`Katy ${mid} Millard`);
    console.log(myName.toUpperCase());
    console.log(myName.toLowerCase());
    console.log(mySplitReverse);
    console.log(myName.slice(0, 2));
    console.log(myName.slice(9));
    console.log(myFull[0] + myFull[5] + myFull[13]);
}

main()