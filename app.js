let btn = document.getElementById('btn')
let inputEl = document.getElementById('input-el');
let container = document.getElementById('container')
let h1Task = document.getElementById('Yourtasks')
let errorMsg = document.getElementById('error-msg')
let listItem = []

btn.addEventListener("click", function(){//Onclick event in button
    if(inputEl.value === ''){//if input filed is empty nothing happens
        errorMsg.textContent = "You hav'nt enter a task"//Show error msg
        inputEl.addEventListener("click",function(){//if user clicked on input filed error msg is gone
            errorMsg.textContent = ''
        })
    }
    else{//otherwise excute
        listItem.unshift(inputEl.value)//pushing input value to array
        printList()
        inputEl.value = ''
    }
})
function printList(){
    styleContainer()
    h1Task.innerHTML =   `<h1 class="text-center text-4xl m-5">Your Tasks</h1>`
    printItemsofScreen()
}
function styleContainer(){
    container.style.border = "2px solid white"
    container.style.borderRadius = "5px"
}
function printItemsofScreen(){
    container.innerHTML += `<div>
    <li class="m-5 py-2  text-lg">  ${listItem[0]}</li>
    <button id="del">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 bg-red-300 p-2" title="Delete" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
    </button> 
    <button id="done">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 bg-green-300 p-2"title="Done" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    </button>
    <hr class="w-full h-[.2rem] bg-white">
    </div>`
}