import { echo } from './light.js'
import { fastDB } from './moduls_light/fastDB.js'
import { Dom } from './moduls_light/Dom.js'

const dm = new Dom
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
dm.query('div').addClass('test')
dm.query('div').css('background-color', 'red')
dm.query('div').append('<p>test</p>')

