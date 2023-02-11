//Bài 1:
function findLength(arr){
    let maxLength = arr[0].length;
    for(i=1;i<arr.length;i++){
        if(maxLength < arr[i].length){
            maxLength = arr[i].length;
        }
    }
    return maxLength;
}
let getStringHasMaxLength = (arr) => {
    let maxLength = findLength(arr);
    let result = [];
    for(i =0;i<arr.length;i++){
        if(arr[i].length === maxLength){
            result.push(arr[i])
        }
    }
    return result;
}
console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']));
//Bài 2
users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
let findByAgeAndIsstatus = (arr)=>{
    let result = [];
    for(i = 0;i<arr.length;i++){
        if(arr[i].age > 25 && arr[i].isStatus){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(findByAgeAndIsstatus(users));
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
let sortByAge = (arr)=>{
    return users.sort(function(user1,user2){
        return user1.age-user2.age;
    })
}
console.log(sortByAge(users));

//Bài 3
let getCountElement = (arr=[])=>{

    counts = [];
    let distinstArray = [...new Set(arr)];
    j = 0;
    for(i = 0;i<distinstArray.length;i++){
        let count = 0;
        for(j =0;j<arr.length;j++){
            if(distinstArray[i] == arr[j]){
                count++;
            }
        }
        counts.push(count)
    }
    return counts
}
console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));