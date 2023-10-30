var buttonAdd = document.getElementById("buttonAdd")
var inputItem = document.querySelector("input")
var ul = document.querySelector("ul")

function addElement(parent, type) {
    if (inputItem.value.length > 0) {
        var element = document.createElement(type)
        element.appendChild(document.createTextNode(inputItem.value))

        inputItem.value = ""
        parent.appendChild(element)
    }
}

function addElementButtonEvent() {
    addElement(ul, "li")
}

function addElementInputEnter(event) {
    if (event.key == "Enter") {
        addElement(ul, "li")
    }
}

function setEvents() {
    buttonAdd.addEventListener("click", addElementButtonEvent)

    inputItem.addEventListener("keydown", addElementInputEnter)
}


setEvents()