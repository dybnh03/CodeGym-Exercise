let arr1 = new Array(3, 5, 1, 8, -3, 7, 8);

function minArray(arr1) {
    if (arr1.length == 0) {
        return -1;
    }
    let minArr1 = arr1[0];

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] < minArr1) {
            minArr1 = arr1[i];

        }

    }
    return arr1.indexOf(minArr1);

}

let Result = minArray(arr1)

alert(Result)