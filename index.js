function divisor(arg) {
    let arr = [];
    for (let i = 1; i <= arg; i++) {

        if (i % 2 == 0) {
            let i2 = 'yu';
            if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
                arr.push(i2 + '-gi-oh');
            } else if (i % 2 == 0 && i % 3 == 0) {
                arr.push(i2 + '-gi');
            } else if (i % 2 == 0 && i % 5 == 0) {
                arr.push(i2 + '-oh');
            } else {
                arr.push(i2);
            }

        } else if (i % 3 == 0) {
            let i3 = 'gi';
            if (i % 3 == 0 && i % 5 == 0) {
                arr.push(i3 + '-oh');
            } else {
                arr.push(i3);
            }

        } else if (i % 5 == 0) {
            let i5 = 'oh';
            arr.push(i5);
        } else {
            arr.push(i);
        }
    }
    return arr;
}
console.log(divisor(30));