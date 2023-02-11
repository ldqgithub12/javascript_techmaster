const todos = [
    {id:1,title:"Đi chơi",status:true},
    {id:2,title:"Học bài",status:false},
    {id:3,title:"Làm bài tập",status:false}
]
const listEl = document.querySelector("ul");
const inputEle = document.getElementById("todo-input");
const btnEle = document.getElementById("btn-add");
const generatedId= arr=>{
    if(arr.length === 0) return 1;
    return arr[arr.length-1].id+1;
}
btnEle.addEventListener("click",()=>{
    const title = inputEle.value;
    if(title.trim() ===""){
        alert("Khong duoc bo trong")
        return;
    }
    const newTodo={
        id: generatedId(todos),
        title: title,
        status:false
    }
    todos.push(newTodo);
    renderTodo(todos)
    inputEle.value = "";
})
const DeleteTodo = id =>{
    for(i = 0;i<todos.length;i++){
        if(id === todos[i].id){
           todos.splice(i,1);
        }
    }
    renderTodo(todos)  
}
const toggleStatus = id=>{
    let ele={}
    for(i = 0;i<todos.length;i++){
        if(id === todos[i].id){
          ele = todos[i];
          ele.status = true;
        }
    }
    renderTodo(todos)  
}
const EditTodo = id=>{
    let ele = {};
       for(i = 0;i<todos.length;i++){
        if(id === todos[i].id){
          ele = todos[i];
        }
    }
    let newtitle = prompt("Nhập title mới",ele.title)
    if(newtitle.trim() === "" ){
        newtitle = ele.title;
    }
    for(i = 0;i<todos.length;i++){
        if(id === todos[i].id){
          ele = todos[i];
          ele.title = newtitle;
          break;
        }
    }
    renderTodo(todos);
 
}
const renderTodo = arr =>{
    listEl.innerHTML="";
    if(arr.length === 0){
        listEl.insertAdjacentHTML("beforebegin",`<li>Danh sách trống</li>`)
        return;
    }
    else{
        let html = "";
        arr.forEach(element => {
            html+=`
            <li>
                <input type="checkbox" ${element.status ? "checked":""} onclick ="toggleStatus(${element.id})">
                <span class="${element.status ? "active":""}">${element.title}</span>
                <button onclick="EditTodo(${element.id})">Edit</button>
                <button onclick="DeleteTodo(${element.id})">Delete</button>
            </li>
            `
        });
        listEl.innerHTML = html;
    }
 
}
renderTodo(todos)