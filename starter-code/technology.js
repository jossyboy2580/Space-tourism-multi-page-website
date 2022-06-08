const counters = document.querySelectorAll('.count');
const deviceName = document.querySelector('.technology-name')
const details = document.querySelector('.technology-description')
const image = document.querySelector('.right-side')

const data = () => {
    fetch('data.json')
        .then(response => {
            return response.json()
        })
        .then(data => {
            details.textContent = data.technology[0].description
            deviceName.textContent = data.technology[0].name
            counters[0].classList.add('active')
            image.style.backgroundImage = `url(${data.technology[0].images.portrait})`
            counters.forEach(indicator => {
                indicator.addEventListener('click', () => {
                    const indicatorId = indicator.id;
                    counters.forEach(indomie => {
                        indomie.classList.remove('active')
                    })
                    indicator.classList.add('active')
                    details.textContent = data.technology[indicatorId].description
                    deviceName.textContent = data.technology[indicatorId].name
                    counters[indicatorId].classList.add('active')
                    image.style.backgroundImage = `url(${data.technology[indicatorId].images.portrait})`
                })
            })
        })
}


data()