// Thêm 1 nút “add” + 1 ô input để nhập text. Mỗi khi bấm nút thêm 1 thẻ <li> có nội dung là nội dung trong ô input vào cuối danh sách
const listEl = document.querySelector("#list");
const inputEle = document.createElement("input");
inputEle.placeholder = "Enter the text";
listEl.insertAdjacentElement("beforebegin",inputEle)
const btnEl = document.createElement("button");
btnEl.innerText = "Add";
inputEle.insertAdjacentElement("afterend",btnEl)

const addElement = ()=>{
    const value = inputEle.value;
    if(value.trim() == ""){
        alert("Noi dung ko duoc de trong");
        return;
    }
    listEl.insertAdjacentHTML("beforeend",`<li>${value}</li>`)
    inputEle.value = "";
}
btnEl.onclick = addElement

inputEle.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        addElement();
    }
})
// Thêm 1 nút “remove”. Chức năng để xóa thẻ <li> cuối cùng của danh sách
const removeBtn = document.createElement("button");
removeBtn.innerText = "Remove last li";
listEl.insertAdjacentElement("afterend",removeBtn);
const removeElement = ()=>{
    const listLi = document.querySelectorAll("li");
    if(listLi.length == 0){
        return;
    }
    else{
        const index = listLi.length-1;
        const deleteLi = listLi[index];
        listEl.removeChild(deleteLi)
    }

}
removeBtn.onclick = removeElement;
// Thêm 1 nút “Hide” trên đầu của danh sách <ul>.
const hideEl = document.createElement("button");
hideEl.innerText = "Hide"
listEl.insertAdjacentElement("beforebegin",hideEl)
// Khi bấm vào “Hide” thì <ul> sẽ ẩn. Đồng thời label của nút “Hide” => “Show”
const hideElement = ()=>{
    if(listEl.style.display != "none"){
        hideEl.innerText = "Show";
        listEl.style.display ="none"
    }
    else{
        hideEl.innerText = "Hide";
        listEl.style.display ="block"
    }
}
hideEl.onclick = hideElement;
// Và ngược lại Khi bấm vào “Show” thì <ul> sẽ hiện. Đồng thời label của nút “Show” => “Hide”