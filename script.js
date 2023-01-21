const form = document.querySelector("#form-habits")
const   nlwSetup = new nlwSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener('change', save)

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayexists = nlwSetup.dayExists(today)

    if(dayexists){
        alert("Dia já incluso 🔴")
        return
    }

    alert("Dia adicionado com sucesso ✅")
    nlwSetup.addDay(today)
}


function save () {
    localStorage.setItem('NLWSetup@habits',JSON.stringify(nlwSetup.data))
}
const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()