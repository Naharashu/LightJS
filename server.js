import { backfast } from "./moduls_light/backfast.js"

const bf = new backfast()
bf.start(8080)
bf.onready(() => {
    console.log("Server is ready")
})