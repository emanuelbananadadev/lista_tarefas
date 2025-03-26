const product = document.getElementById("product")
const btn = document.getElementById("mainBtn")

btn.addEventListener("click", () => {
    console.log(product.value)

    product.value = ""
})