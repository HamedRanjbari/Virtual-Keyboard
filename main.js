let $ = document
let input = $.getElementById("input")
let li = $.querySelectorAll("li")

li.forEach((element) => {
    $.addEventListener("keydown", (event) => {
        if (event.code === element.id) {
            element.classList.add("tap")
        }
    })
    $.addEventListener("keyup", () => {
        element.classList.remove("tap")
    })
})