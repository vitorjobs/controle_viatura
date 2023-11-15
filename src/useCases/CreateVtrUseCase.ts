import { IVtrRepository } from "../repositories/IVtrlRepository"
import { ICreateVtrRequestDTO } from "./CreateVtrDTO"
import { Viatura } from "../entities/Viatura"

export class CreateVtrUseCase {
  constructor(private vtrRepository: IVtrRepository) {}

  async execute(data: ICreateVtrRequestDTO) {
    const vtrAlreadyExists = await this.vtrRepository.findByEmail(data.placa)

    if (vtrAlreadyExists) {
      throw new Error("User already exists")
    }
    const vtr = new Viatura(data)
    //return vtr

    const resultado = await this.vtrRepository.save(vtr)
    return resultado
  }
}
