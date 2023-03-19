// Cau 1
// Đặt màu văn bản thành #777

//Bai tap dom 1
let ele = document.getElementById("text");
ele.style.color = "blue"
// Đặt kích thước phông chữ thành 2rem
ele.style.fontSize = "2rem"
// Đặt nội dung HTML thành Tôi có thể làm < em > bất cứ điều gì </ > tôi muốn với JavaScript
ele.innerHTML = "Tôi có thể làm bất cứ điều gì tôi muốn với JavaScript"

// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)
let ul = document.querySelector('ul')
let li = ul.querySelectorAll('li')
console.log(li)
for (i = 0; i < li.length; i++) {
    li[i].style.color = "blue"
}
//Cau 3
let ulb3 = document.querySelector('#list')
let listLi = ulb3.querySelectorAll('li')
// Sử dụng javascript để thực hiện những công việc sau

// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
let li8 = document.createElement("li")
li8.innerText = "Item 8"
let li9 = document.createElement("li")
li9.innerText = "Item 9"
let li10 = document.createElement("li")
li10.innerText = "Item 10"
ulb3.insertAdjacentElement('beforeend', li8)
ulb3.insertAdjacentElement('beforeend', li9)
ulb3.insertAdjacentElement('beforeend', li10)
// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)

listLi[0].style.color = "red"
// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
listLi[2].style.backgroundColor = "blue"
// Remove thẻ <li> 4
let lidelete = listLi[3];
ulb3.removeChild(lidelete)
// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
let newLi = document.createElement("li")
newLi.innerText = "Thẻ li mới"
let li3 = listLi[4];
ulb3.insertBefore(newLi, li3);