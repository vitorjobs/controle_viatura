import { config } from "dotenv"
import { app } from "./app"
config()
app.listen(3000, () => {
  console.warn("App Runninsg on Port 3000")
})
