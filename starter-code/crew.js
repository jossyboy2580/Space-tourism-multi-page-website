const indicators = document.querySelectorAll('.indicate');
const rank = document.querySelector('.rank')
const named = document.querySelector('.name')
const details = document.querySelector('.details')
const image = document.querySelector('.image')


const data = () => {
    fetch('data.json')
        .then(response => {
            return response.json()
        })
        .then(data => {
            rank.textContent = data.crew[0].role
            details.textContent = data.crew[0].bio
            named.textContent = data.crew[0].name
            indicators[0].classList.add('active')
            image.style.backgroundImage = `url(${data.crew[0].images.png})`
            indicators.forEach(indicator => {
                indicator.addEventListener('click', () => {
                    const indicatorId = indicator.id;
                    indicators.forEach(indomie => {
                        indomie.classList.remove('active')
                    })
                    indicator.classList.add('active')
                    rank.textContent = data.crew[indicatorId].role
                    details.textContent = data.crew[indicatorId].bio
                    named.textContent = data.crew[indicatorId].name
                    image.style.backgroundImage = `url(${data.crew[indicatorId].images.png})`
                })
            })
        })
}


data()
crewDetails.forEach(item => {
    console.log(item.length)
})