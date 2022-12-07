console.log('sanity check')

const inp = document.getElementById('typeBox')
const btn = document.getElementById('submit-button')
const listEl = document.getElementById('todo-list')

// console.log(inputEl, buttonEl, listEl)

btn.addEventListener('click', function() {
    if (inp.value !== '') {
        const li = document.createElement('li')
        li.textContent = inp.value
        listEl.appendChild(li)
        inp.value = ''
    }
})