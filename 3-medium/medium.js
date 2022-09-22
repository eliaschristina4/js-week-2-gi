/* MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. 
For example: if the user enters the number 3, then it should return the month “March.” 
Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12). */

function months(num){
    num = Number(prompt('Enter the number that corresponds to the month you\'re thinking of.'));
    
    if (num === 1){
        return `${num}, January`
    } else if (num === 2){
        return `${num}, February`
    } else if (num === 3){
        return `${num}, March`
    } else if (num === 4){
        return `${num}, April`
    } else if (num === 5){
        return `${num}, May`
    } else if (num === 6){
        return `${num}, June`
    } else if (num === 7){
        return `${num}, July`
    } else if (num === 8){
        return `${num}, August`
    } else if (num === 9){
        return `${num}, September`
    } else if (num === 10){
        return `${num}, October`
    } else if (num ===11){
        return `${num}, November`
    } else if (num === 12){
        return `${num}, December`
    } else /*(num < 1 || num > 12)*/ {
        alert('invalid number')
    }
}

console.log(months());



// const num = Number(prompt('Enter the number that corresponds to the month you\'re thinking of.'));
// switch (num) {
//     case '1':
//         console.log(`${num}: January`);
//         break;
//     case 2:
//         return 'February';
//         break;
//     case 3:
//         return 'March';
//         break;
//     case 4:
//         return 'April';
//         break;
//     case 5:
//         return 'May';
//         break;
//     case 6:
//         return 'June';
//         break;
//     case 7:
//         return 'July';
//         break;
//     case 8:
//         return 'August';
//         break;    
//     case 9:
//         return 'September';
//         break;
//     case 10:
//         return 'October';
//         break;
//     case 11:
//         return 'November';
//         break;
//     case 12:
//         return 'December';
//         break;            
//     default:
//         return 'What month is it?';
// }
