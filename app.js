const btn = document.getElementById('btn')
const inputEl = document.getElementById('input-el');
const container = document.getElementById('container')
const h1Task = document.getElementById('Yourtasks-div')
const errorMsg = document.getElementById('error-msg')
const del = document.getElementById('del') 
const done = document.getElementById('done')
let listItem = []//array for storing list items

//Adding event listner to start adding items
btn.addEventListener("click",startOperation)
//Enter key function [COPIED FUNCTION]
inputEl.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    btn.click();
  }});

//Onclick event in 'add to list' button
function startOperation(){
    if(inputEl.value === ''){//if input filed is empty nothing happens
        errorMsg.textContent = "You hav'nt enter a task"//Show error msg
        inputEl.addEventListener("click",function(){//if user clicked on input filed error msg is gone
            errorMsg.textContent = ''
        })
    }
    else{//otherwise excute
        listItem.unshift(inputEl.value)//pushing input value to array
        printList()//calling function
        inputEl.value = ''//Removing the text text from input field
    }
}
//printList function
function printList(){
    styleContainer()//Calling StyleContainer() to style the <ul> tag
    h1Task.innerHTML =   `<h1 class="text-center text-4xl m-5">Your Tasks</h1>`//Printing H1 tag in his parent div tag
    printListItemsonScreen()//Printing the list items
}
//Style the unorederd list container
function styleContainer(){
    container.style.border = "3px solid #000"//adding border to container
    container.style.borderRadius = "10px"//adding border radius to container
}
//Prints List to HTML
function printListItemsonScreen(){
let containerFirstChild = container.firstElementChild //grabing the container(ul tag) first child
    let divList = document.createElement('div')//creating a div tag
    divList.classList.add("sm:mx-8", "sm:my-4","my-2","mx-5")//adding a class to  created div
    //adding li tag and buttons to created div tag
    divList.innerHTML = `
    <li class="m-3 py-2  text-xl break-normal"> ${listItem[0]} </li> 
    <button id="del" class="mx-2">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 bg-red-300 p-2" title="Delete" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
    </button> 
<button id="done" class="mx-2">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 bg-green-300 p-2" title="Done" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
    </svg>
</button>
<hr class="w-full h-[.2rem] bg-[#000] rounded">`
    //if user add his new item to existing item list then it should at 1st place
    if(containerFirstChild == null){//if container has not child in it 
        container.appendChild(divList)//add the created div tag to it
    }else{//has already a child in it
        container.insertBefore(divList,containerFirstChild)//insert created div before the existing child
    }
} 
// function remove(e){
//     const item = e.target
//     // console.log(event.currentTarget)
//     // console.log(item)
//     if(item.classList == "del"){
//         const todo = item.parentElement
//         todo.remove()
//     }
// }