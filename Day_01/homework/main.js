// Bài 1: Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó
let factorial = (a)=>{
    result = 1;
    for(i = 1;i<=a;i++){
        result *= i;
    }
    return result;
}
console.log(factorial(5))

// Ví dụ: calculateFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120
// Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó
let reverseString = (s)=>{
    let charA = s.split("");
    let result="";
    for(i = charA.length-1;i>=0;i--){
        result += charA[i];
    }
    return result;
}
console.log(reverseString("Hello"));
// Ví dụ: reverseString(‘hello’) => olleh
// Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào
function translate(s){
    switch(s){
        case "VN":{
            console.log("Xin Chào");
            break;
        }
        case "EN":{
            console.log("Hello");
            break;
        }
        case "FRA":{
            console.log("Bonjour")
            break;
        }
        default:{
            console.log("Không hợp lệ");
            break;
        }
    }
}
translate("FRA")
// Ví dụ: translate(‘VN’) => “Xin chào”
// translate(‘EN’) => “Hello”
// Gợi ý : Sử dụng switch - case . Học viên tự nghĩ ra 1 vài mã quốc gia và câu chào tương ứng với quốc gia đó

// Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.
function subString(s){
    subs = s.substring(0,10)+"...";
    console.log(subs);
}
subString("hellololololololololo")
// Ví dụ : subString(“xinchaocacbandenvoiTechmaster”) => “xinchaocac…”