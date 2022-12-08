console.log('sanity check')

const inp = document.getElementById('typeBox')
const btn = document.getElementById('submit-button')
const listEl = document.getElementById('todo-list')
const resetBtn = document.getElementById('reset-button')
// const bodyEl = document.querySelector('body')
// const resetBtn = document.createElement('Button')
// resetBtn.innerText = 'Reset'
// resetBtn.insertBefore(listEl, bodyEl)
// console.log(bodyEl)


// console.log(inputEl, buttonEl, listEl)

btn.addEventListener('click', function() {
    if (inp.value !== '') {
        const li = document.createElement('li')
        li.textContent = inp.value
        listEl.appendChild(li)
        inp.value = ''
    }
})

resetBtn.addEventListener('click', function() {
    [...listEl.children].forEach(child => child.remove())
})