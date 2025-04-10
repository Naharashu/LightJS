import { echo } from '../light.js'
let dom_count = 0

class ElementCollection extends Array { 
  onready(cb) {
    const isReady = this.some(e => {
      return e.readyState != null && e.readyState !== 'loading'
    })
    if (isReady) {
      cb()
    }
    else {
      this.on('DOMContentLoaded', cb)
    }
    return this
  }
  
  html(result) {
    try {
      this.forEach(e => {
        e.innerHTML = result
      })
    } catch {
      echo.error("Error in DOM.html()")
    }
    return this
  }
  
  text(result) {
    try {
      this.forEach(e => {
        e.textContent = result
      })
    } catch {
      echo.error("Error in DOM.text()")
    }
    return this
  }
  

  on(event, cborSelector, cb) {
    if (typeof cborSelector === 'function') {
      this.forEach(e => {
        e.addEventListener(event, cborSelector)
      })
    } else {
      this.forEach(elem => {
        elem.addEventListener(event, (e) => {
          if (e.target.matches(cborSelector)) {
            cb(e)
          }
        })
    })
    }
    return this
  }

  click(Selector, cb) {
      this.forEach(elem => {
        elem.addEventListener('click', (e) => {
          if (e.target.matches(Selector)) {
            cb(e)
          }
        })
      })
    return this
  }
  
  hover(Selector, cb) {
      this.forEach(elem => {
        elem.addEventListener('hover', (e) => {
          if (e.target.matches(Selector)) {
            cb(e)
          }
        })
      })
    return this
  }

  next() {
    return this.map(e => e.nextElementSibling).filter(e => e !== null)
  }
  prev() {
    return this.map(e => e.previousElementSibling).filter(e => e !== null)
  }

  removeClass(className) {
    this.forEach(e => {
      e.classList.remove(className)
    })
    return this
  }
  addClass(className) {
    this.forEach(e => {
      e.classList.add(className)
    })
    return this
  }

  hasClass(className) {
    return this.some(e => {
      return e.classList.contains(className)
    })
  }

  toggleClass(className) {
    this.forEach(e => {
      e.classList.toggle(className)
    })
    return this
  }

  css(property, value) {
    const camelProperty = property.replace(/-([a-z])/g, (g) => g.replace('-', '').toUpperCase())
    this.forEach(e => e.style[camelProperty] = value)
    return this
  }

  hide(element) {
    this.forEach(e => {
      e.style.display = 'none'
    })
    return this
  }

  show(element) {
    this.forEach(e => {
      e.style.display = 'block'
    })
    return this
  }

  append(element) {
    this.forEach(e => {
        if (element instanceof ElementCollection) {
            element.forEach(el => e.appendChild(el));
        } else if (typeof element === 'string') {
            const temp = document.createElement('template');
            temp.innerHTML = element.trim();
            temp.content.childNodes.forEach(node => {
                e.appendChild(node.cloneNode(true));
            });
        } else if (element instanceof Node) {
            e.appendChild(element);
        }
    });
    return this;
  }

  removeChild(element) {
    this.forEach(e => {
      e.removeChild(element)
    })
    return this
  }
}

class ajaxPromise {
  constructor(promise) {
    this.promise = promise
  }

  finish(cb) {
    this.promise = this.promise.then(data => {
      cb(data)
      return data
    }
    )
    return this
  }

  fail(cb) {
    this.promise = this.promise.catch(cb)
    return this
  }

  always(cb) {
    this.promise = this.promise.finally(cb)
    return this
  }
}

export class Dom {
  constructor() {

  }
  query(element) {
    dom_count += 1
    if (typeof element === 'string') {
      return new ElementCollection(document.querySelector(element))
    } else {
      return new ElementCollection(element)
    }
  }

  queryAll(element) {
    dom_count += 1
    if (typeof element === 'string') {
      return new ElementCollection(...document.querySelectorAll(element))
    } else {
      return new ElementCollection(...element)
    }
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
    let el = document.querySelector(`[name="${element}"]`)
    if (el) {
      el.remove()
      dom_count -= 1
    }
    return el
  }

  static get({url, data = {}, success = () => {}, dataType = 'application/json'}) {
    const queryString = Object.entries(data)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&')

    return new ajaxPromise(
        fetch(`${url}?${queryString}`, {
            method: 'GET',
            headers: {
                'Content-Type': dataType
            },
        })
        .then(res => {
            if (res.ok) return res.json()
            throw new Error(`HTTP error! status: ${res.status}`)
        })
        .then(data => {
            success(data)
            return data
        })
        .catch(error => {
            echo.error("Light DOM: AJAX error:", error)
            throw error
        })
    )
  }

  static post({url, data = {}, success = () => {}, dataType = 'application/json'}) {
    return new ajaxPromise(
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': dataType
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if (res.ok) return res.json()
            throw new Error(`HTTP error! status: ${res.status}`)
        })
        .then(data => {
            success(data)
            return data
        })
        .catch(error => {
            echo.error("Light DOM: AJAX error:", error)
            throw error
        })
    )
  }
}