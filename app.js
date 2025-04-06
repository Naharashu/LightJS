import { echo } from './light.js'
import { fastDB } from './moduls_light/fastDB.js'
import { dom } from './moduls_light/Dom.js'

const dm = new dom
const db = new fastDB
let x = {
  name: "John",
  age: 14
}
db.set(undefined, 1, "test")
let y = db.get(undefined, 1)
db.newClaster("test")
db.set("test", 0, 13)
let z = db.get("test", 0)
db.delClaster("test")
echo(z)
z = db.get("test", 0)
echo(z)

echo(dm.query('div'))
let rtrt = dm.create("p", "hello")
document.body.appendChild(rtrt)
dm.remove("pe")

