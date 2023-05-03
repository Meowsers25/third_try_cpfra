const apiEnd = './bod.json'
const display = document.querySelector('.board')

const getInfo = async() => {
    const res = await fetch(apiEnd)
    const data = await res.json()
    // console.log(data)
    return data
}
// getInfo()

const displayBod = async () => {
    const payload = await getInfo()
    let dataDisplay = payload.map((object) => {
        const { title, name } = object
        // console.log(name)
        if(title == "Director"){
            return`
            <div class='bod-card'>
                <p class="bod-name">${name}</p>
            </div>
            `
        } else {
            return `
            <div class='bod-card'>
                <h2 class="title">${title}</h2>
                <p class="bod-name">${name}</p>
            </div>
            `
        }
        
    }).join('')
    display.innerHTML = dataDisplay
}
displayBod()

