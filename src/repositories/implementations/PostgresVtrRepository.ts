import { IVtrRepository } from "../IVtrlRepository"
import { Viatura } from "../../entities/Viatura"

export class PostgresVtrRepository implements IVtrRepository {
  private viaturas: Viatura[] = []

  async findByEmail(placa: string): Promise<Viatura> {
    const viatura = this.viaturas.find((viatura) => viatura.placa === placa)

    return viatura
  }

  async save(vtr: Viatura): Promise<void> {
    this.viaturas.push(vtr)
  }
}
