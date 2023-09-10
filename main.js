const list = document.querySelector(".list")

function onFormSubmit (e) {
    e.preventDefault()
    const inputValue = e.target.children[0].value
    
    list.appendChild(createListItem(inputValue))
}

function deleteListItem(e) {
    alert("Tetap ingin Menghapus List ini?")
    const parent = e.target.parentElement

    list.removeChild(parent)
}

function createListItem(inputValue) {
    const item = document.createElement("div")
    item.innerHTML = `
        <div>
            <input type="checkbox"/>
            <span>${inputValue}</span>
        </div>
        <button onclick="deleteListItem(event)">del</button>
    `
    item.setAttribute("class", "list-item")

    return item
}