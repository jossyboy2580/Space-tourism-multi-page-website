const tabs = document.querySelectorAll('.tabs > li');
const named = document.querySelector('.destination-name')
const details = document.querySelector('.destination-description')
const image = document.querySelector('.image > img')
const distance = document.querySelector('.dist-stat .stat-detail')
const eta = document.querySelector('.eta-stat .stat-detail')


const data = () => {
    fetch('data.json')
        .then(response => {
            return response.json()
        })
        .then(data => {
            details.textContent = data.destinations[0].description
            named.textContent = data.destinations[0].name
            eta.textContent = data.destinations[0].travel
            distance.textContent = data.destinations[0].distance
            tabs[0].classList.add('active')
            image.src = `${data.destinations[0].images.png}`
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const tabId = tab.id;
                    tabs.forEach(indomie => {
                        indomie.classList.remove('active')
                    })
                    tab.classList.add('active')
                    details.textContent = data.destinations[tabId].description
                    named.textContent = data.destinations[tabId].name
                    eta.textContent = data.destinations[tabId].travel
                    distance.textContent = data.destinations[tabId].distance
                    image.src = `${data.destinations[tabId].images.png}`
                })
            })
        })
}


data()