changePlace = () => {
    let change = document.getElementById("string-6").childNodes[0].nodeValue;
    document.getElementById("string-6").innerHTML = document.getElementById("string-1").childNodes[0].nodeValue;
    document.getElementById("string-1").innerHTML = document.getElementById("string-3").childNodes[0].nodeValue;
    document.getElementById("string-3").innerHTML = document.getElementById("string-2").childNodes[0].nodeValue;
    document.getElementById("string-2").innerHTML = document.getElementById("string-5").childNodes[0].nodeValue;
    document.getElementById("string-5").innerHTML = document.getElementById("string-4").childNodes[0].nodeValue;
    document.getElementById("string-4").innerHTML = change;
}

changePlace()



Elements = () => {
    let Color = document.querySelectorAll(".element");
    let i;
    for (i = 0; i < Color.length; i++) {
        Color[i].style.color = "green";
        if (i < 3) {
            Color[i].style.color = "red";
        }
    }
    let other = document.getElementById("other")
    other.style.fontFamily = "Lato, sans-serif"
}

Elements()



todolist = () => {
    let todolist = document.getElementById("todo-list")
    let tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
    for (let i = 0; i < 5; i++) {
        let newLi = document.createElement('li');
        newLi.className = "task";
        newLi.innerHTML = tasks[i];
        todolist.appendChild(newLi);
    }
}

todolist()




document.querySelectorAll('p').forEach((elem) => {
    elem.insertAdjacentHTML('afterend', '</hr>')
})


// Remove = () => {
//     let textnode = document.createTextNode("Canned Fish");
//     let things = document.getElementById("item");

//     things.children[1].remove();
//     things.replaceChild(textnode, things.lastChild);
// }

// Remove()