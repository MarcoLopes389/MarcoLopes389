const root = document.getElementById('root')
const button = document.getElementById('button')
const text = document.createElement('p')
const textNode = document.createTextNode('Teste')
text.appendChild(textNode)

button.addEventListener('click', () => {
    root.appendChild(text)
})