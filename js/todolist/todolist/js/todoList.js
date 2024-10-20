export class TodoList {
    constructor() {
        this.tdoList = []
    }
    addTodo(todo) {
        this.tdoList.push(todo)
    }
    removeTodo(crIndex){
        this.tdoList.splice(crIndex,1)
    }

    renderTodo() {
        let content = ""
        content = this.tdoList.reduceRight((tdContent, item, index) => {
            tdContent += `
            <li>
                <span>${item.textTodo}</span>
                <div>
                    <button id="remove btn"  class="btn" data-index= "${index}"  onclick = "deleteTodo(event)" data-status = "${item.status}" >
                    <i class="fa-solid fa-trash"></i>
                    </button>
                    <button id="complete" class="btn" data-index= "${index}" data-status = "${item.status}" onclick = "completeTodo(event)">
                    <i class="fa-solid fa-check"></i></button>
                </div>
            </li>
            `
            return tdContent
        },"")
        return content
    }
    sortTodoList(isDes){
        this.tdoList.sort((todo,nextTodo)=>{
            const textA = todo.textTodo.toLowerCase()
            const textB = nextTodo.textTodo.toLowerCase()
            return textB.localeCompare(textA)
        })
        if(isDes){
            this.tdoList.reverse()
        }
    }
}