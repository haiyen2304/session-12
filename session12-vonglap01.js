//// luyện tập vòng lặp 1

//Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.
// for(let i=0; i<100;i++){
//    console.log(i);
//    if(i==99){
//     console.log("đã hoàn thành");
//    }
// }


//bài 2: 
//    let a = +prompt("nhập nhiệt độ hiện tại")
//    if(a>100){
//     alert("hãy hạ nhiệt độ");
//    }else if (a<20){
//     alert("hãy tăng nhiệt độ");
//    }else{alert("nhiệt ododj ổn định")}
// // bài3: hiện thị ra 20 số trong dãy fibonacci đầu tiền

//  for(let i=0; i<100;i++){
//    console.log(i);
//    if(i==99){
//     console.log("đã hoàn thành");
//    }
// }

//bài 3: fibonacci
// let fib1= 0
// let fib2=1
// let fibnext
// for (let i=1; i<= 18 ;i++){
//     fibnext= fib1+fib2;
//     console.log(fibnext);
//     fib1=fib2;
//     fib2=fibnext;
// }

// bài 4: fibonacci chia hết cho 5

// let fib1= 0
// let fib2=1
// let fibnext
// for (let i=1; i<= 18 ;i++){
//     fibnext= fib1+fib2;
//     console.log(fibnext);
//     if(fibnext%5===0){
//         console.log(fibnext+"đây là số đầu tiên chia hết cho 5"); 
//         break;}
//     fib1=fib2;
//     fib2=fibnext;
// }

// bài 5: tồng
// let fib1= 0
// let fib2=1
// let fibnext=1// vị trí thứ 3
// let sum=1
// for (let i=1; i<= 18 ;i++){
//     fibnext= fib1+fib2;
//     console.log(fibnext);
//     sum=sum+fibnext;
//     fib1=fib2;
//     fib2=fibnext;
// }

// bài 6
// let sum=0;
// let dem=0;
// for(let i=5;dem<=30;i++ ){
//     if(i%7==0){
//     sum=sum+i;
//     dem=dem+1;
// } 
// }
// console.log(sum);

//bài 7 : 
// for(let i=1 ;i<=100;i++){
//     if(i%5==0 && i%3==0){console.log("fizzbuzz");console.log(i);     
//     }else if(i%5==0){console.log("buzz");console.log(i);      
//     }else if  (i%3==0){console.log("fizz");console.log(i);     
//     }
// }

//bài 8 - game 

//// luyện tập vòng lặp bài 2

//bài 1: fibonacci
// let fib1= 0
// let fib2=1
// let fibnext
// for (let i=1; i<= 18 ;i++){
//     fibnext= fib1+fib2;
//     console.log(fibnext);
//     fib1=fib2;
//     fib2=fibnext;
// }

// bài 2 tính giai thừa của 1 số nguyên dương. 



// bài 4
// let rs5 = "" ;
// let width = 40 ;
// let height = 10 ;
// for(let i = 1 ; i <= height ; i++){
//     for(let j = 1 ; j <= width ; j++){
//         if(i == 1 || i == height || j == 1 || j == width){
//             rs5 += "*";
//         }else {
//             rs5 += " " ;
//         }
//     }
//     rs5 += "\n";
// }
// console.log(rs5);

// bài 5
// let size = 5;
// let rs6 = "";
// for (let i = size; i >= 1; i--) {
//   // Vẽ nửa trái tim (phần trên)
//   for (let j = 1; j <= size - i; j++) {
//     rs6+= "  ";
//   }
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     rs6+="* ";
//   }
//   rs6+="\n";
// }

// for (let i = 1; i <= size; i++) {
//   // Vẽ nửa trái tim (phần dưới)
//   for (let j = 1; j <= i; j++) {
//    rs6+="  ";
//   }
//   for (let j = 1; j <= 2 * (size - i) - 1; j++) {
//    rs6+="* ";
//   }
//   rs6+="\n";
// }
// console.log(rs6);

// bài 6
// let month = 0 ;
// let monney = 0 ;
// let interestRateOfMonth = 1/100 ;

// do {
//     month = +prompt("Nhập số tháng vay :");
// }while(Number.isNaN(month) || month < 0);

// do {
//     monney = +prompt("Nhập số tiền vay :");
// }while(Number.isNaN(monney) || monney < 0);

// let totalMoney = monney ;
// for(let i = 1 ; i <= month ; i++){
//     totalMoney += (totalMoney * interestRateOfMonth);
// }
// totalMoney = Math.floor(totalMoney);
// console.log(`Vậy số tiền phải trả sau ${month} là ${totalMoney}`);