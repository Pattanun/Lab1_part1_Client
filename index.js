console.log('x: ')
let stdin = process.openStdin()
let x, y
stdin.addListener("data", (num) => {
    // console.log(High.toString().trim())
    x = num

    for (let i = 1; i <= 12; i++) {
        if (i == 1) {
            x = x;
            console.log(x);
        }
        else {
            y = x * i
            console.log(y);
        }
        stdin.destroy()
    }
})