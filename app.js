import { echo } from './light.js'
import * as light from './light.js'
import { Dom } from './moduls_light/Dom.js'
import { fastDB } from './moduls_light/fastDB.js'
import { FileSysAccAPI } from './moduls_light/file.js'

const dm = new Dom
const db = new fastDB
const file = new FileSysAccAPI
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
dm.query('div').append('<p>tet</p>').css('background-color', 'black')
file.openFile()


let w = light.deepclone(x)
echo(w)
