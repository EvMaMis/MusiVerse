document.querySelector('div.btn-try').addEventListener("click", function() {
    console.log("print i told you long ago")
})

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()

        let href = this.getAttribute('href').substring(1)

        const scrollTarget = document.getElementById(href)

        const  topOffset = 0
        const elementPosition = scrollTarget.getBoundingClientRect().top
        const offSetPosition = elementPosition - topOffset

        window.scrollBy({
            top: offSetPosition,
            behavior: 'smooth',
        })
    })
})