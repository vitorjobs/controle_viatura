import { Viatura } from "../entities/Viatura"

export interface IVtrRepository {
  findByEmail(placa: string): Promise<Viatura>
  save(viatura: Viatura): Promise<void>
}
