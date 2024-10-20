import {Todo} from "./todo.js"  
import { TodoList } from "./todoList.js"
 
let completeList = new TodoList()
let todoList = new TodoList()
const getID = id => {
    return document.getElementById(id)
}

const addTodo = () => {
    let txtTodo = getID("newTask").value
    let ulTodu = getID("todo")
    let content = ""
    if(txtTodo != ""){
        let td = new Todo(txtTodo , "Todo")
        todoList.addTodo(td)
        showTodo(ulTodu)
    }
    getID("newTask").value = ""
}

getID('addItem').addEventListener('click' , () =>{
    addTodo()
})

const showTodo = (ulTodu) => {
    ulTodu.innerHTML = todoList.renderTodo()
}

const showComplete = (complete) => {
    complete.innerHTML = completeList.renderTodo()
}

const deleteTodo = (e) => {
    let tdIndex = e.currentTarget.getAttribute("data-index")
    let status =  e.currentTarget.getAttribute("data-status")
    let ulComplete = getID('completed')
    if(status == "Todo") {
        todoList.removeTodo(tdIndex)
        let ulTodu = getID("todo")
        showTodo(ulTodu)
        console.log(todoList)
    }else if(status == "completed"){
        completeList.removeTodo(tdIndex)
        showComplete(ulComplete)
    }
}

window.deleteTodo = deleteTodo

const completeTodo = (e) => {
    let ulTodu = getID("todo")
    let tdIndex = e.currentTarget.getAttribute("data-index")
    let status =  e.currentTarget.getAttribute("data-status")
    let ulComplete = getID('completed')
    if(status == "Todo"){
        let completeItem = todoList.tdoList.slice(tdIndex,tdIndex+1)
        let ojTodo = new Todo(completeItem[0].textTodo,"completed")
        moveTodo(todoList,completeList,ojTodo, tdIndex )
        showTodo(ulTodu)
        showComplete(ulComplete)
        
        
    }else if(status == "completed"){
        let todoItem = completeList.tdoList.slice(tdIndex,tdIndex+1)
        let ojCompleted = new Todo(todoItem[0].textTodo,"Todo")
        moveTodo(completeList,todoList,ojCompleted, tdIndex )
        showTodo(ulTodu)
        showComplete(ulComplete)
    }
}
window.completeTodo = completeTodo

const moveTodo = (depart,arrival, obj, tdIndex) => {
    depart.removeTodo(tdIndex)

    arrival.addTodo(obj)    
}


const sortASC = () => {
    let ulTodu = getID("todo")
    todoList.sortTodoList(false)
    showTodo(ulTodu)
}
const sortDES = () => {
    let ulTodu = getID("todo")
    todoList.sortTodoList(true)
    showTodo(ulTodu)
}
window.sortASC = sortASC
window.sortDES = sortDES