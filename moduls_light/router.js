import { echo } from '/light.js'
import { Dom } from '/moduls_light/Dom.js'

const dom = new Dom

const routers = {
  '/home': () => dom.query("app").html("<p>Main page</p>"),
  '/about': () => dom.query("app").html("<p>About page</p>"),
  '/download': () => dom.query("app").html("<p>Download page</p>")
}
