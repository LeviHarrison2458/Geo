function getRandomNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.random())
        }, 500)
    })
}
async function printRandomNumber() {
    const randomNumber = await getRandomNumber()
    console.log(randomNumber)
}
printRandomNumber()

async function getCityData(city) {
    const AUTH_KEY = 'AIzaSyDvCb9qjvxFSt5q3RFAgst7JSM-tSazInA'
    const url = `https://geocode.xyz/${city}?json=1&auth=${AUTH_KEY}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.latt, data.longt)
}
getCityData('seattle')