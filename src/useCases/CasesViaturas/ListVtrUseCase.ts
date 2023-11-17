import { IVtrRepository } from "../../repositories/IVtrlRepository"
// import { ICreateVtrRequestDTO } from "./CreateVtrDTO"
// import { Viatura } from "../../entities/Viatura"

export class ListVtrUseCase {
  constructor(private vtrRepository: IVtrRepository) {}

  async execute() {
    const viaturas = await this.vtrRepository.list()

    return viaturas
  }
}
