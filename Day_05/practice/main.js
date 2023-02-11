const btn = document.getElementById('btn');
const image = document.getElementById('image');
const select = document.getElementById('breed-list');

// Vừa load trang phải gọi API để render danh sách breed
// API : https://dog.ceo/api/breeds/list/all

async function getBreedList() {
    // Gọi API để lấy danh sách giống loài
    let res = await axios.get("https://dog.ceo/api/breeds/list/all")
    // Sau khi có data thì hiển thị kết quả trên giao diện
    renderBreed(res.data.message)
}

function renderBreed(breeds) {
    // Duyệt qua object breeds -> tạo thẻ option -> gắn vào DOM
    // Cách 2 : Lấy ra danh sách keys của objec (Object.keys) => Duyệt mảng
    nameList = Object.keys(breeds);
    for(i = 0;i<nameList.length;i++){
        let names = document.createElement("option");
        names.innerText= nameList[i];
        select.insertAdjacentElement("afterbegin",names);
    }
}
btn.addEventListener("click",()=>{
    getRandomImage()
})

async function getRandomImage() {
    try {
        let res = await axios.get("https://dog.ceo/api/breeds/image/random")
        console.log(res);
        image.src = res.data.message
    } catch (error) {
        console.log(error);
    }
}
getBreedList()

