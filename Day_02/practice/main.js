// Bài 1: Viết function tìm số lớn nhất trong mảng
let max = (arr)=>{
    let result = arr[0];
    for(i = 0;i<arr.length;i++){
        if(arr[i] > result){
            result = arr[i];
        }
    }
    return result;
}
console.log(max([3,7,9,2,1,15,8]));

// Bài 2: Viết function tìm số nhỏ nhất trong mảng

let min = (arr)=>{
    let result = arr[0];
    for(i = 0;i<arr.length;i++){
        if(arr[i] < result){
            result = arr[i];
        }
    }
    return result;
}
console.log(min([3,7,9,2,1,15,8]));
// Bài 3: Viết function cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
let oddArr = (arr)=>{
    for(i = 0;i<arr.length;i++){
        arr[i] = arr[i]%2;
    }
    return arr;
}
console.log(oddArr([4,2,5,6,2,7]));
// Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]
// Bài 4: Viết function truyền vào 1 chuỗi, hãy sao chép đó chuỗi lên 10 lần (Sử dụng array để làm)
let repeatString = (str)=>{
    const arr = [];
    for(i = 0;i<10;i++){
        arr.push(str);
    }
    return arr.join("");
}
console.log(repeatString("a"));
// Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘aaaaaaaaaa’
// Bài 5: Viết function truyền vào 1 chuỗi, hãy sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang (Sử dụng array để làm)
let repeatString1 = (str)=>{
    const arr = [];
    for(i = 0;i<10;i++){
        arr.push(str);
    }
    return arr.join("-");
}
console.log(repeatString1("a"));
// Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘a-a-a-a-a-a-a-a-a-a’

console.log("Practice 2");
// Bài 1: Viết function để kiểm tra 1 giá trị có nằm trong mảng hay không?
let isExist = (a,b)=>{
    let result = false;
    for(i = 0;i<a.length;i++){
        if(a[i] == b){
            result = true;
            break;
        }
    }
    return result;
}
console.log(isExist([1,2,3,4,5], 6));
// checkElementExist([1,2,3,4,5], 5) => true
// checkElementExist([1,2,3,4,5], 6) => false
// Bài 2: Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ. Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào

let elementGreater=(arr,number)=>{
    let index = 0;
    for(i = 0;i<arr.length;i++){
        if(arr[i] == number){
            index = i;
        }
    }
    arr.sort().splice(0,index+1);
    return arr;
}
console.log(elementGreater([1,2,3,3,4,5], 3));
// getElementGreater([1,2,3,4,5], 3) => [4,5]
// getElementGreater([1,2,3,4,5], 5) => []
// Bài 3: Viết function để tạo mã màu HEX ngẫu nhiên.
let randomHexCode = ()=>{
    const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hexColor = "#";
    for(i = 0;i<6;i++){
        let index = Math.floor(Math.random()*hexNumbers.length)
        hexColor += hexNumbers[index];
    }
    return hexColor;
}
console.log(randomHexCode())
// randomHexCode() => #728a98
// randomHexCode() => #a72938
// Bài 4: Viết function để tạo mã màu RGB ngẫu nhiên.
let randomRgbCode = ()=>{
    const arrColor = [];
    let result = "";
    for(i = 0;i<3;i++){
        let index = Math.floor(Math.random()*256)
        arrColor.push(index);
    }
    return result = `rgb(${arrColor})`;
}
console.log(randomRgbCode())
// randomRgbCode() => rgb(213,43,133)
// randomRgbCode() => rgb(12,32,122)

//
console.log("Object");
// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
let totalMoney = (arr) =>{
    return arr.reduce((total,ele)=>{
        return total+(ele.count*ele.price);
    },0)
}
console.log(totalMoney(products))
// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
let brandes = (arr)=>{
    return arr.filter(ele=>ele.brand == "Apple")
}
console.log(brandes(products));

// 4. Tìm các sản phẩm có giá > 20000000
let priceOver = (arr)=>{
    return arr.filter(ele=>ele.price > 20000000)
}
console.log(priceOver(products))

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
let findByName = (arr)=>{
    return arr.filter(ele => ele.name.toLowerCase().includes("pro"));
}
console.log(findByName(products))

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
let addNewProduct = (product)=>{
    products.push(product)
    return products
}
let newProduct ={
    name: "New Product",
    price: 19500000,
    brand: "Samsung",
    count: 3,
}
console.log(addNewProduct(newProduct))
// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
// let deleteSamsung = ()=>{
//     products.forEach(pro=>{
//         if(pro.brand == "Samsung"){
//             delete pro.name;
//             delete pro.price;
//             delete pro.brand;
//             delete pro.count;
//         }
//     }) 
//     return products;
// }
// console.log(deleteSamsung())
// 8. Sắp xếp giỏ hàng theo price tăng dần

let sortProductIncrese = ()=>{
    return products.sort(function(pro1,pro2){
        return pro1.price - pro2.price;
    })
}
console.log(sortProductIncrese())
// 9. Sắp xếp giỏ hàng theo count giảm dần
// let sortProductDecrease = ()=>{
//     return products.sort(function(pro1,pro2){
//         return pro2.price - pro1.price;
//     })
// }
// console.log(sortProductDecrease())
// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
let randomTwoProduct=()=>{
    const randomArr =[];
    for(i = 0;i<2;i++){
        let index = Math.floor(Math.random()*products.length);
        randomArr.push(products[index])
    }
    return randomArr;
}
console.log(randomTwoProduct())