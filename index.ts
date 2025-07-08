import promptSync from 'prompt-sync';
const prompt = promptSync();


//TASK #1
let login:string = prompt("Введіть логін: ")
let password:number = Number(prompt("Введіть пароль: "))

if (login === "admin" && password === 12345 ){
    console.log("Доступ відритий!")
} else{
    console.log("Доступ закритий!")
}


//TASK #2
let numinp:number = Number(prompt("Введіть чисто: "))
if(numinp % 2 === 0 ){
    console.log("Чисто є парний")
} else{
    console.log("Чисто не є парним")
}

//TASK #3
let dates:number = Number(prompt("Введіть ваш вік: "))

if (dates >= 18){
    console.log("Доступ відритий!")
} else if(dates <= 18){
    console.log("Доступ обмежений!")
}

//TASK #4
let product:number = 34
let tax:number = 4

let result:number = product + product * (tax/100)
console.log(result)


//TASK #5
let n:number = Number(prompt("Введіть чисто: "))
let grade:string;

switch(true){
    case (n >= 90 && n <= 100):
    grade = "A";
    break;
        case (n >= 70 && n <= 89):
    grade = "B";
    break;
        case (n >= 50 && n <= 69):
    grade = "C";
    break;
        case (n <= 50):
    grade = "F";
    break;
}
console.log("Ваша оцінка: " + grade)


//TASK #6 | #2
const int:string = prompt("Введіть число:  ");

if (int !== null && int.includes("3")) {
  console.log("Число містить цифру 3");
} else {
  console.log("Число не містить цифру 3");
}


//TASK #7 | #2
const nm:number = prompt("Введіть число: ");
if (nm !== null) {
  const nums = Number(nm);
  if (nums % 3 === 0 || nums % 5 === 0) {
    console.log("Ділиться на 3 або 5");
  } else {
    console.log("Не ділиться ні на 3 ні на 5");
  }
}


