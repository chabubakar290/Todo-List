let todos = [];
function render() {
    let list = document.getElementById("list");
    list.innerHTML = "";
    todos.forEach(function(item) {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}
let btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    let input = document.getElementById("input");
    let task = input.value;
    todos.push(task);
    render();
    input.value= "";
});