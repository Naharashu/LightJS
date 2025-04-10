import { Dom } from '/moduls_light/Dom.js'
const dom = new Dom


const routers = {
    '/': 'index.html',
    '/home': 'home.html',
    '/about': 'about.html',
    '/download': 'download.html',
    '/404': '404.html'
}


const route = (event) => {
    event = event || window.event
    event.preventDefault()
    window.history.pushState({}, '', event.target.href)
    handleLocation()
    }

const handleLocation = async () => {
    const path = window.location.pathname
    const route = routers[path] || routers['/404']
    const html = await fetch(route).then(data => data.text())
    dom.query('body').html(html)
}

window.onpopstate = handleLocation
window.route = route


handleLocation()