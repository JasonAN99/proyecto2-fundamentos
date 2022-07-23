let numbers = [12, 75, 150, 180, 145, 525, 50];
let newnumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 500) {
        break;
    } else if (numbers[i] <= 150 && numbers[i] % 5 == 0) {
        document.write(` ${numbers[i]}`)
    }
}


