import { PostgresVtrRepository } from "../../repositories/implementations/PostgresVtrRepository"
import { CreateVtrUseCase } from "./CreateVtrUseCase"
import { CreateVtrController } from "./CreateVtrController"
import { ListVtrUseCase } from "./ListVtrUseCase"
import { ListVtrController } from "./ListVtrController"

const postgresVtrRepository = new PostgresVtrRepository()

const createVtrUseCase = new CreateVtrUseCase(postgresVtrRepository)

const createVtrController = new CreateVtrController(createVtrUseCase)

const listVtruseCase = new ListVtrUseCase(postgresVtrRepository)
const listVtrController = new ListVtrController(listVtruseCase)

export {
  createVtrUseCase,
  createVtrController,
  listVtruseCase,
  listVtrController,
}
