import { PostgresVtrRepository } from "../repositories/implementations/PostgresVtrRepository"
import { CreateVtrUseCase } from "./CreateVtrUseCase"
import { CreateVtrController } from "./CreateVtrController"

const postgresVtrRepository = new PostgresVtrRepository()

const createVtrUseCase = new CreateVtrUseCase(postgresVtrRepository)

const createVtrController = new CreateVtrController(createVtrUseCase)

export { createVtrUseCase, createVtrController }
