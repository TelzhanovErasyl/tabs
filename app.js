let tabs = document.querySelectorAll('.tab')
let title = document.querySelector('#article-title')
let info = document.querySelector('#article-info')
let texts = [
    {
        title: 'History',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quod quibusdam expedita corporis obcaecati totam reprehenderit pariatur minus iste repellendus veritatis laborum, tenetur, soluta distinctio facere reiciendis ipsam possimus voluptatibus.'
    },

    {
        title: 'Vision',
        info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, facilis id quod sint rem quasi iusto cumque maiores accusantium quaerat? Porro, tenetur. Neque repellat tempore nihil explicabo repudiandae qui fugit?',
    },

    {
        title: 'Goal',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis enim quod maiores quisquam ad minima atque quis nostrum provident aspernatur. Illo ut explicabo mollitia quo omnis soluta saepe nam et Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nulla dignissimos illo impedit sapiente beatae non ad odio?'
    }
]

tabs.forEach(curentTab => {
    curentTab.addEventListener('click', function() {
        tabs.forEach(tab => {
            if (curentTab !== tab) {
                tab.classList.remove('actived')
            }
        })
        curentTab.classList.add('actived')

        texts.forEach(text => {
            if (text.title.toLowerCase() == curentTab.id) {
                title.innerHTML = text.title
                info.innerHTML = text.info
            }
        })
    })
})