import { Router } from "express"
import {
  createVtrController,
  listVtrController,
} from "./useCases/CasesViaturas"

const router = Router()

router.get("/", (request, response) => {
  return response.json({ message: "Bem Vindos ao BackEnd API REST de estudos" })
})

router.get("/viaturas", (request, response) => {
  return listVtrController.handle(request, response)
})
router.post("/viaturas", (request, response) => {
  return createVtrController.handle(request, response)
})

export { router }
