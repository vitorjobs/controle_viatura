import { Request, Response } from "express"
import { ListVtrUseCase } from "./ListVtrUseCase"

export class ListVtrController {
  constructor(private listVtrUseCase: ListVtrUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const result = await this.listVtrUseCase.execute()
      return response.status(201).json(result)
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error",
      })
    }
  }
}
