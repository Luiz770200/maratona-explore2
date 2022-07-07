const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
});

const sex = document.getElementById('sex')

sex.addEventListener('change', () => {
    document.body.classList.toggle('pink')
    chk.addEventListener('change', () => {
        document.body.classList.toggle('dark-pink')})
})