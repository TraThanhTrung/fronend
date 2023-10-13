var form = document.querySelector('.form')
var input = document.querySelector('.form input')
var ul = document.querySelector('.todos')
const todos = JSON.parse(localStorage.getItem('todos'))

function addTodo(todo){
    var li = document.createElement('li')
    li.setAttribute('class', todo.completed ? 'completed' : '' )
    li.innerHTML = `<span>${todo.text}</span>
                    <i class="fas fa-trash"></i>`
    li.addEventListener('click', function(){
        this.classList.toggle('completed')
        updateTodos()
    })      
    li.querySelector('i').addEventListener('click', function(e){
        console.log(e.target);
        e.target.parentElement.remove()
        updateTodos()
    })        
    ul.appendChild(li) 
    updateTodos()
}
form.addEventListener('submit', e=>{
    e.preventDefault()
    var text = input.value.trim()
    text != '' ? addTodo({ text, completed: false }) : undefined 	
    input.value = ''
})

function updateTodos(){
    var list = document.querySelectorAll('li')
    const todos = []
    list.forEach((item) =>{
        todos.push({
            text : item.querySelector('span').innerHTML,
            completed : item.classList.contains('completed'),
        })
    })
    localStorage.setItem('todos', JSON.stringify(todos))
}