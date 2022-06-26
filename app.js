const btn = document.getElementById('btn')
const inputEl = document.getElementById('input-el');
const container = document.getElementById('container')
const h1Task = document.getElementById('Yourtasks-div')
const errorMsg = document.getElementById('error-msg')
const done = document.getElementById('done')
let listItem = []//array for storing list items
let num = 0

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
        listItem.push(inputEl.value)//pushing input value to begginng of array
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

function printListItemsonScreen(){
    let containerFirstChild = container.firstElementChild //grabing the container(ul tag) first child

    let createdDiv = document.createElement('div')//creating a div tag
    createdDiv.classList.add("sm:mx-8", "sm:my-4","my-2","mx-5")//adding a class to  created div

    let List = document.createElement('li')//Creating a li tag
    List.classList.add("m-3", "py-2",  "text-xl", "break-normal")//adding class to li tag
    List.textContent = listItem[num]//giving array[0]
    createdDiv.appendChild(List)//appending li tag to newly created div tag above


    let createDelButton = document.createElement('button')
    createDelButton.classList.add("del", "mx-2")
    createDelButton.setAttribute("id","del")
    createDelButton.onclick = function(e){    
        const item = e.target
        console.log(item)
        if(item.classList[0] == "del" && listItem.length == 1){
            const todo = item.parentElement
            todo.remove()
            container.style.border = "none"//
            container.style.borderRadius = "none"
        }else if(item.classList[0] == "del"){
                    const todo = item.parentElement
                    todo.remove()
                    console.log(listItem.indexOf(listItem[num]))
                }
                console.log(listItem)
                console.log(listItem.length)
            }
    createDelButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none h-9 w-9 bg-red-300 p-2" title="Delete" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>` 
    createdDiv.appendChild(createDelButton)


    let createCompleteButton = document.createElement('button')
    createCompleteButton.classList.add("mx-2")
    createCompleteButton.setAttribute("id","del")
    createCompleteButton.onclick = function(e) {    
        const item = e.target
        console.log(item)
        if(item.classList[0] == "del"){
            console.log(List)
            List.classList.add("text-green")
        }
                console.log(listItem)
                console.log(listItem.length)
            }

    createCompleteButton.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none h-9 w-9 bg-green-300 p-2" title="Done" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
    </svg>`
    createdDiv.appendChild(createCompleteButton)

    let horizontalLine = document.createElement('hr')
    horizontalLine.classList.add("w-full", "h-[.2rem]", "bg-[#000]", "rounded")
    createdDiv.appendChild(horizontalLine)

    if(containerFirstChild == null){
        container.appendChild(createdDiv)
    }else{
        container.insertBefore(createdDiv,containerFirstChild) 
    }
    num++
}