import { Router } from "express"
import { createVtrController } from "./useCases"

const router = Router()

router.post("/viaturas", (request, response) => {
  return createVtrController.handle(request, response)
})

export { router }
