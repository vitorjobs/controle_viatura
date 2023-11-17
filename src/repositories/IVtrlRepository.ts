import { Viatura } from "../entities/Viatura"

export interface IVtrRepository {
  findByPlaca(placa: string): Promise<Viatura>
  save(viatura: Viatura): Promise<void>
  list(): Promise<Viatura[]>
}
