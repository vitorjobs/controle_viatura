import { IVtrRepository } from "../../repositories/IVtrlRepository"
import { ICreateVtrRequestDTO } from "./CreateVtrDTO"
import { Viatura } from "../../entities/Viatura"

export class CreateVtrUseCase {
  constructor(private vtrRepository: IVtrRepository) {}

  async execute(data: ICreateVtrRequestDTO) {
    const vtrAlreadyExists = await this.vtrRepository.findByPlaca(data.placa)

    if (vtrAlreadyExists) {
      throw new Error(
        "Já existe uma placa registrada com este número, verifique",
      )
    }
    const vtr = new Viatura(data)
    //return vtr

    const resultado = await this.vtrRepository.save(vtr)
    return resultado
  }
}
