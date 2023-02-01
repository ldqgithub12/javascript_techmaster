// Bài 1. Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.
function repeatString(a){
    let result = a;
    for(i = 0;i<9;i=i+1){
        result = result+a;
    }
    return result;
}
console.log(repeatString("quang"))
// Ví dụ : repeatString(“a”) => Kết quả trả về là “aaaaaaaaaa”
// Bài 2. Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
function repeatString2(a){
    let result = a;
    for(i = 0;i<9;i=i+1){
        result = result+"-"+a;
    }
    return result;
}
console.log(repeatString2("quang"))
// Ví dụ: repeatString(“a”) => Kết quả trả về là “a-a-a-a-a-a-a-a-a-a”
// Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.
function repeatString3(a,b){
    let result = a;
    for(i = 0;i<b-1;i=i+1){
        result = result+"-"+a;
    }
    return result;
}
console.log(repeatString3("quang",5))
// Ví dụ: repeatString(‘a’, 5) => Kết quả trả về là ‘a-a-a-a-a’
// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100
let sum = ()=>{
    let result = 0;
    for(i=0;i<=100;i++){
        if(i % 5 == 0){
            result += i;
        }
    }
    return result;
}
console.log(sum())
// Bài 5: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.

let theTich = (r)=>{
    let result = (4*Math.PI*Math.pow(r,3))/3;
    return result;
}
console.log(theTich(3))
// Bài 6: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
let sum1 = (a,b)=>{
    let result = 0;
    if(a<b){
        for(i = a+1;i<b;i++){
            result += i;
        }
    }else{
        for(i = a-1;i>b;i--){
            result += i;
        }
    }
    return result;
}
console.log(sum1(8,3))
// Note : Kết quả xuôi và ngược là như nhau

// Ví dụ :

// sum(3,8) = 22
// sum(8,3) = 22
// Bài 7: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function isPrime(a){
    if(a < 2){
        return false;
    }
    else if( a == 2){
        return true;
    }
    else{
        for(i = 2; i<=Math.sqrt(a);i++){
            if(a%i == 0){
                return false;
            }
            else return true;
        }
    }
}
console.log(isPrime(2))
// Bài 8: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.

// let bai8 = (a)=>{
//     let sum = 0;
//     for(i = 3;i<=a;i++){
//         if(isPrime(i)){
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(bai8(6))


// Bài 9: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
let bai9 = (a)=>{
    let result = 0;
    for(i = 1;i<=a;i++){
        if(a % i == 0){
            result += i;
        }
    }
    return result;
}
console.log(bai9(6))

