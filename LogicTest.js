let arrayOfStrings = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
let arrayOfIndex=[];
let arrayOfResult=[];
for (let i = 0; i < arrayOfStrings.length; i++) {

    if (arrayOfIndex.includes(i)) continue;

    let currentGroup=[arrayOfStrings[i]];
    let word = arrayOfStrings[i].split("").sort().join("");

    for (let j = i+1; j < arrayOfStrings.length; j++) {

        if (arrayOfIndex.includes(j)) continue;

        let other = arrayOfStrings[j];
        if (word === other.split("").sort().join("")) {
            currentGroup.push(other);
            arrayOfIndex.push(j);
        }
    }

    if(currentGroup.length>1 || (currentGroup.length===1)){
        arrayOfIndex.push(i);
        arrayOfResult.push([currentGroup]);
        console.log(arrayOfResult);
    }
}