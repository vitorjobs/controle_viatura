import { Request, Response } from "express"
import { CreateVtrUseCase } from "./CreateVtrUseCase"

export class CreateVtrController {
  constructor(private createVtrUseCase: CreateVtrUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { modelo, placa, marca, ano } = request.body
    try {
      const result = await this.createVtrUseCase.execute({
        modelo,
        placa,
        marca,
        ano,
      })
      return response.status(201).json(result)
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error",
      })
    }
  }
}
