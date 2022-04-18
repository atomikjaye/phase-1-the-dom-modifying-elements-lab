// Write your code here!
const main = document.getElementById('main')
main.remove()

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = '🏆Jocelyn is the champion🏆'
newHeader.style = "font-family: sans-serif; color: #8E562E;"
document.body.append(newHeader)
document.body.style = "background-color: #FFD679"

console.log(main)