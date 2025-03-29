const product = document.getElementById("product")
const btn = document.getElementById("mainBtn")
const ul = document.getElementsByTagName("ul")[0]
const divRemove = document.getElementsByClassName("item-remove")[0]
const btnWarning = document.querySelector("div img:nth-child(3)")
const btnBack = document.querySelector("main img")


function addItem() {
    if(product.value.trim() === "") return alert("Digite um produto")

    const li = document.createElement("li")
    const divChecked = document.createElement("div")
    divChecked.classList.add("checked")
    const span = document.createElement("span")
    span.innerText = product.value
    const img = document.createElement("img")
    img.src = "assets/icons/trash.svg"
    img.alt = "lixeira"

    li.appendChild(divChecked)
    li.appendChild(span)
    li.appendChild(img)
    ul.appendChild(li)

    product.value = ""
    product.focus()

    img.addEventListener("click", ()=> {
        li.remove()
        divRemove.classList.remove("none")
    })
    
    contSelectedItems()
}

ul.addEventListener("click", (event) => {
    if(event.target.classList.contains("checked")) {
        event.target.classList.toggle("checked-active")
        contSelectedItems()
    }
})

ul.addEventListener("click", (event)=>{
    if(event.target.tagName === "IMG") {
        const selectedItems = document.querySelectorAll(".checked-active")

        if(selectedItems.length > 0) {
            selectedItems.forEach((item)=> {
                item.parentElement.remove()
            })
        } else {
            event.target.parentElement.remove()
        }

        divRemove.classList.remove("none")
        contSelectedItems()
    }
})

btn.addEventListener("click", addItem)

product.addEventListener("keypress", (event) => {
    if(event.key === "Enter") {
        addItem()
    }
})

removeWarning()


function removeWarning() {
    btnWarning.addEventListener("click", () => {
        divRemove.classList.add("none")
    })
}

function contSelectedItems() {
    const selectedCount = document.querySelectorAll(".checked-active").length
    console.log(`Itens selecionados: ${selectedCount}`)
}

btnBack.addEventListener("click", () => {
    location.reload()
})