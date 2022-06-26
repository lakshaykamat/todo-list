const btn = document.getElementById('btn')
const inputEl = document.getElementById('input-el');
const container = document.getElementById('container')
const h1Task = document.getElementById('Yourtasks')
const errorMsg = document.getElementById('error-msg')
const del = document.getElementById('del') 
const done = document.getElementById('done')
let listItem = []

//Enter key function 
inputEl.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    btn.click();
  }});
//Button event listner
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
//Starts to call fuction
function printList(){
    styleContainer()
    h1Task.innerHTML =   `<h1 class="text-center text-4xl m-5">Your Tasks</h1>`
    printItemsofScreen()
}
//Style the unoreder list container
function styleContainer(){
    container.style.border = "3px solid #000"
    container.style.borderRadius = "10px"
}
//Prints List to HTML
function printItemsofScreen(){
let containerFirstChild = container.firstElementChild
    let divList = document.createElement('div')
    divList.classList.add("sm:mx-8", "sm:my-4","my-2","mx-5")
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
    if(containerFirstChild == null){
        container.appendChild(divList)
    }else{
        container.insertBefore(divList,containerFirstChild)
    }
} 
