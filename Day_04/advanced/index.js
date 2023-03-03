let todos = [];

const listEl = document.querySelector("ul");
const inputEle = document.getElementById("todo-input");
const btnEle = document.getElementById("btn-add");
const APIURL = "http://localhost:8080/api/todo/list"
const getTodo = async () =>{
    try {
        let rs = await axios.get(APIURL);
        todos = rs.data;
        renderTodo(todos)
    } catch (error) {
        console.log(error);
    }
}
const generatedId= arr=>{
    if(arr.length === 0) return 1;
    return arr[arr.length-1].id+1;
}
btnEle.addEventListener("click",async ()=>{
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
    try{
        let rs = await axios.post("http://localhost:8080/api/todo/", newTodo);
        todos.push(newTodo);
        renderTodo(todos)
        inputEle.value = "";
    }
    catch(error){
        console.log(err);
    }
})
const DeleteTodo = async (id) =>{
    for(i = 0;i<todos.length;i++){
        if(id === todos[i].id){
           todos.splice(i,1);
        }
    }
    let rs = await axios.delete(`http://localhost:8080/api/todo/${id}`);
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
const EditTodo = async (id)=>{
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
    let rs = await axios.put(`http://localhost:8080/api/todo/${id}`, ele);
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
getTodo()