// <!-- --------------------------------
//  let result=17;

// let n=+prompt("hãy nhập vào số n từ 1 đến 100");

//  while(n !== result){

//  if(n<result){ console.log("too small!!!");  }else if(n>result){
//     console.log("too Big!!! ");
//     }
//     n=+prompt("hãy nhập vào số n từ 1 đến 100");
//      }

//     console.log("bingo");

//     -------------------------------- -->



// bài 3:
// let n = +prompt("nhập n");
// let check = true;
// for (let i = 2; i < n; i++) {
//   for (let j = 2;  j <= Math.sqrt(i); j++) {
//     if (i % j == 0) {
//       continue
//     }
//     console.log(i);
//   }
// }


//-------------------------------------------
///Continue-------------------
// let a = [1, 2, 3, 4];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] == 3) {
//     continue;
//   }
//   console.log(a[i]);
// }
//------------------------------------
// bài 3 đãlàm đúng
// bài 3: Viết chương trình nhập vào số N. 
// Hiển thị N số nguyên tố theo thứ tự tăng dần
// 
// let n=+prompt("hãy nhập vào số n")
// let count=0;
// // biến đếm số lượng số nguyên tố sẽ được in ra
// let num=2; //số nguyên tố đầu tiên trong dãy số nguyên tố 
// while(count<=n){
// // phải tìm ra được số nguyên tố
// // thì biến count mới tăng lên 1 đơn vị.
//     let check= true
//     for(i=2;i<num;i++){
//         if(num%i===0){
//             check= false;
//         }
//     }
//     if(check=true){
//         console.log(num);
//         count=count+1
//     }
//     num=num+1;
// }
////========================================
// BÀI 4: Tính tổng 30 số đầu tiên chia hết cho 5
// let sum=0;
// let dem =0;
//    for(let i=0; dem<=30 ;i+5){
//         sum=sum+i
//         dem=dem+1
//    }console.log(sum);

//===============================================================
// let soTien = 1000; // Số tiền ban đầu
// let thang = 12; // Số tháng cho vay
// let laiSuat = 1; // Lãi hàng tháng

// let tongCong = soTien;

// for (let i = 0; i < thang; i++) {
//   tongCong += tongCong * (laiSuat / 100);
// }

// console.log(
//   "Số tiền cuối cùng sau " + thang + " tháng là: " + tongCong.toFixed(2)
// );

// //toFixed(2) làm tròn đến số thập phân thứ 2

// bài 5 :Tính tổng 20 số đầu tiên trong dãy Fibonacci


// let a=[10,2,3,4,5];
// let xep
// let n = a.length-1;
// for(let i = 0; i <= n / 2; i++){
//             xep = a[i];
//             a[i] = a[n- i];
//             a[n - i] = xep;
//         }console.log(a);

//=====================================
// let start =0;
// let end =a.length-1
// while ( start < end){
//     a[end]=x
//     a[start]=a[end];
//     start ++ ;
//     end--; 
//     console.log(a);
// } 
//===================================== bé đến lớn
// let a=[-3,-5,5,1,2,4];
// let xep = 0;
// let i;
// let j= i+1;

// for(i=0;i<a.length-1;i++ ){
//    for ( j =  1; j < a.length; j++) {
//         if (a[i] > a[j]) {
//             xep = a[i];
//             a[i] = a[j];
//             a[j] = xep;
//         }
//     }
// }
// console.log(a);

let a = [-3, -5, 5, 1, 2, 4];
let xep = 0;

for (let i = 0; i <= a.length - 1; i++) {
    for (let j = i + 1; j <= a.length; j++) {
        if (a[i] > a[j]) {
            xep = a[i];
            a[i] = a[j];
            a[j] = xep;
        }
    }
}
console.log(a);



