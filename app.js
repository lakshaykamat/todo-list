let btn = document.getElementById('btn')
let inputEl = document.getElementById('input-el');
let container = document.getElementById('container')
let h1Task = document.getElementById('Yourtasks')
let errorMsg = document.getElementById('error-msg')
let listItem = []
let num = 0

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
    num++//num = num + 1
    styleContainer()
    h1Task.innerHTML =   `<h1 class="text-center text-4xl m-5">Your Tasks</h1>`
    container.innerHTML += `<li class="m-5 py-2  text-lg"> ${num}. ${listItem[0]}</li>
    <button id="del">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
    </button> 
    <button id="done">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
    </button>
    <hr class="w-full h-[.2rem] bg-white">`
}
function styleContainer(){
    container.style.border = "2px solid white"
    container.style.borderRadius = "5px"
}