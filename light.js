

// Useful constant

export const pi = 3.14159265
export const e = 2.71828183
export const gravityConst = 0.0000000000667430
export const letters = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  all: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
}



// addon


export function echo(value) {
  console.log(value)
}

echo.error = function echo_error(value) { console.error(value) }
echo.warn = function echo_warning(value) {
  console.warn('WARN: ' + value)
}

export function Eval(code) {
    let safeCode = code.replace(/[^a-zA-Z0-9+\-*/%.()\s^]/g, '')
    
    const sCode = safeCode.replace(/\^/g, '**')

    try {
        return new Function('return ' + sCode)(); 
    } catch (error) {
        echo.error('Error executing code:', error)
        return null
    }
}



// helpful




export function sleep(t) {
  if (typeof t !== "number" || isNaN(t)) {
    echo.error("Error in sleep function");
    return;
  }

  return new Promise(resolve => setTimeout(resolve, t));
}

export function clone(original) {
  return {...original}
}

export function deepclone(original) {
  return JSON.parse(JSON.stringify(original))
}

export function compare(a, b) {
  return a === b
}

export function random(min, max) {
  let num = Math.floor(Math.random() * (max - min) + min)
  return num
}

export function isPalindrome(src) {
  src = src.toLowerCase().replace(/[^a-z0-9]/g, "");
  return src === src.split("").reverse().join("");
}

export function isEmpty(value) {
  return Object.keys(value).length === 0 && value.constructor === Object
}

export function root(a, b) {
  if (typeof a !== 'number') {
    echo("Error in root(): first argument not a number")
    return Null
  }
  if (typeof b !== 'number') {
    echo("Error in root(): second argument not a number")
    return Null
  }
  
  return (a**(1/b))
}



// Security funcs



export function checkPassLvl(password) {
  const symbls = ['#', '$', '&', '@', '!', '?', ';', ',', '.', '_'];
  let passLvl = 0;
  let passLen = password.length

  if (isEmpty(password)) {
    return echo("Error: Password is empty");
  }

  if (/\d/.test(password)) {
    passLvl += 1;
  }


  if (symbls.some(symbol => password.includes(symbol))) {
    passLvl += 1;
  }

  if (/[a-zA-Z]/.test(password)) {
    passLvl += 1;
  }
  
  if (passLen <= 7) {
    return "weak"
  }

  if (passLvl === 0) {
    echo("ERROR: some error in checkPassLvl");
  }

  if (passLvl === 1) {
    return "weak";
  }
  if (passLvl === 2) {
    return "medium";
  }
  if (passLvl === 3) {
    return "good";
  }
}

export function equalsType(value, type) {
  return typeof value === typeof type
}

export function isSafeStr(str) {
    if (isEmpty(str)) {
      return "WARNING: value in isSafeStr is empty"
    }
    if (typeof str !== typeof "string") {
      return "WARNING: value in isSafeStr is not string"
    }
    if (/^[a-zA-Z0-9\s\-_.!]+$/.test(str)) {
      return true
    }
    return false
  }
  
export function isValidNum(number) {
  if (/^\+?[1-9]\d{1,14}$/.test(number)) {
    return true
  }
  return false
}

export function isHttps(url) {
  if (/^(https):\/\/[^\s/$.?#].[^\s]*$/i.test(url)) {
    return true
  }
  if (isEmpty(url)) {
    return null
  }
  return false
}

export function isValidMail(email) {
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return true
  }
  return false
}



// Some other funcs

export function randomInArray(arr) {
  if (!arr) return ""
  return arr[Math.floor(Math.random() * arr.length)]
}

export function toBin(num) {
  return num.toString(2);
}

export function fromBin(code) {
  return parseInt(code, 2)
}

export function toHex(num) {
  return num.toString(16)
}

export function fromHex(code) {
  return parseInt(code, 16)
}

export class fake {
  constructor() {
    this.cyrlNames = [
      "Іван",
      "Данило",
      "Яна", 
      "Сергій",
      "Максим",
      "Олег",
      "Олександр",
      "Олексій",
      "Євгенія",
      "Женя",
      "Тимофій",
      "Кирило",
      "Катерина",
      "Феодосій",
      "Федор",
      "Віталій",
      "Василій",
      "Мілана",
      "Вікторія"
    ]
    this.engNames = [
      "Alex",
      "Mark",
      "Jo",
      "John",
      "Jordan",
      "Leonardo",
      "Anna",
      "Elizabeth",
      "Eliza",
      "Fin",
      "Donald",
      "Andrew",
      "Anderson",
      "Steve",
      "Milan",
      "Emily",
      "Emilia"
    ]
  }
  genCyrlNames() {
    return randomInArray(this.cyrlNames)
  }
  genEngNames() {
    return randomInArray(this.engNames)
  }
}

export class randEngine {
  constructor() {
    this.names = [
      "Alex",
      "Mark",
      "Jo",
      "John",
      "Jordan",
      "Leonardo",
      "Anna",
      "Elizabeth",
      "Eliza",
      "Fin",
      "Donald",
      "Andrew",
      "Anderson",
      "Steve",
      "Milan",
      "Emily",
      "Emilia",
      "Ivan",
      "Danilo",
      "Yana", 
      "Sergiy",
      "Maxim",
      "Oleg",
      "Alexandr",
      "Alexey",
      "Evgenia",
      "Evgen",
      "Jenya",
      "Timothy",
      "Kiril",
      "Katerina",
      "Feodosii",
      "Fedor",
      "Vitaliy",
      "Vasylii",
      "Milana",
      "Viktoria"
    ]
  }
  randomBool() {
    return Math.random() > 0.5
  }
  randomName() {
    return randomInArray(this.names)
  }
  randomStr(len = 12) {
    let letts = letters.all
    let res = ''
    for (let i = 0; i < len; i++) {
      res += [randomInArray(letts)]
    }
    return res
  }
  randomPassword(length = 8) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?£¥₩€.,;:^–—";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += [randomInArray(chars)]
    }
    return password;
  }
  randomEmail() {
    let emad = this.randomName()
    emad = emad.toLowerCase()
    const domains = ["gmail.com", "yahoo.com", "outlook.com", "companyname.net", "fastmail.net", "example.com"]
    return emad + "@" + randomInArray(domains)
  }
  randomBio() {
    let name = this.randomName()
    const bio = ["I chill guy", "I love cats", "Glory to Ukraine", "why s you here?", "hello", "I am {name}", "I love {name}, he my bestie",  "I love {name}, she my bestie", "I love {name}, they my bestie", "Wiwiwi", "I love dogs", "I love foxes", "Legends never dies", "coding...", "mmm... hamburger!"]
    let biog = randomInArray(bio)
    biog = biog.replace(/{name}/g, name)
    return biog
  }
  randomPronouns() {
    let pronouns = ["he/him", "she/her", "they/them", "he/she/him/her", "i dont want say", "any"]
    return randomInArray(pronouns)
  }
  randomBirthday(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}
  randomUser() {
    let user = {
      username: this.randomName(),
      password: this.randomPassword(),
      email: this.randomEmail(),
      bio: this.randomBio(),
      pronouns: this.randomPronouns(),
      birthday: this.randomBirthday(new Date(1970, 0, 1), new Date()).toString()
    }
    return user
  }
  random2DPos() {
    return { x: random(0, 100), y: random(0, 100)}
  }
  random3DPos() {
    return { x: random(0, 100), y: random(0, 100), z: random(0, 100)}
  }
}

