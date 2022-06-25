let btn = document.getElementById('btn')
let inputEl = document.getElementById('input-el');
let container = document.getElementById('container')
let h1Task = document.getElementById('Yourtasks')
let errorMsg = document.getElementById('error-msg')

btn.addEventListener("click", function(){//Onclick event in button
    if(inputEl.value === ''){//if input filed is empty nothing happens
        errorMsg.textContent = "Enter a task to add"//Show error msg
        inputEl.addEventListener("click",function(){//if user clicked on input filed error msg is gone
            errorMsg.textContent = ''
        })
    }
    else{//otherwise excute
        h1Task.innerHTML =   `<h1 class="text-center text-4xl m-5">Your Tasks</h1>`
        container.innerHTML += `<li class="m-5 py-2  text-lg cssborder">  ${inputEl.value} </li>` 
        inputEl.value = ''
    }
})