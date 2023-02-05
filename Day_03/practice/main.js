// Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
const h1query = document.querySelector('#heading')
h1query.style.color = 'red'
h1query.style.textTransform = 'uppercase'
console.log(h1query);
// Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
const paraquery = document.querySelectorAll('.para')
paraquery.forEach(ele=>{
    ele.style.color = 'blue'
    ele.style.fontSize = '20px'
})
console.log(paraquery);
// Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
const linkFb = document.createElement('a');
linkFb.innerText = "facebook";
linkFb.href="https://www.facebook.com/";
const para3 = document.querySelector('.para-3')
para3.insertAdjacentElement('afterend',linkFb)
// Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
const titleQuery = document.querySelector('#title')
titleQuery.innerText = "Đây là thẻ tiêu đề"
console.log(titleQuery);
// Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
const descriptionQuery = document.querySelector('.description')
descriptionQuery.classList.add('text-bold')
console.log(descriptionQuery);
// Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
let btn = document.createElement('button')
btn.innerText="Click me"
document.body.replaceChild(btn,para3)
// Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
const para2 = document.querySelector('.para-2')
const paraCopy = para2.cloneNode(true);
para2.insertAdjacentElement("afterend",paraCopy)
// Xóa thẻ có class=“para-1”
const para1 = document.querySelector('.para-1');
document.body.removeChild(para1)