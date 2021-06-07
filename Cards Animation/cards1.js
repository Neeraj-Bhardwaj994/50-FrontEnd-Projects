const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeCls()
        panel.classList.add('active')
    })
})

function removeCls() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
        })
}