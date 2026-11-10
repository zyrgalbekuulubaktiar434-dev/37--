const list=document.querySelector('#list')
// 

// Promise

function getData(){
   fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json()
.then(data=>{
    console.log(data);
    showDate(data)
})
) 
}
getData()
function showDate(arr){
    for (const item of arr){
        list.innerHTML+=`
        <li>${item.title}- Comoany: ${item.company.neme}
          </li>`
        
    }
}

