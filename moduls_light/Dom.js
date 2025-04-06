import { echo } from '/light.js'
let dom_count = 0

export class dom {
  constructor() {
    this.element 
  }
  query(element) {
    dom_count += 1
    return document.querySelector(element)
  }
  
  queryAll(element) {
    dom_count += 1
    return document.querySelectorAll(element)
  }
  
  create(element, value) {
    if (dom_count > 1024) {
      echo.warn("So many DOM methods can slow site")
    }
    let el = document.createElement(element)
    el.textContent = value
    dom_count += 1
    return el
  }
  remove(element) {
    let el = document.querySelector(`[name="${element}""]`)
    if (el) {
      el.remove()
      dom_count -= 1
    }
    return el
  }
  click(element, callback) {
    let el = document.getElementById(element)
    try {
      el.addEventListener("click", () => { callback })
    } catch(error) {
      echo.error("Light DOM: error in click()")
    }
  }
}