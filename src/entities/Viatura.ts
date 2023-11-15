import { uuid } from "uuidv4"

export class Viatura {
  public readonly id!: string

  public modelo: string
  public placa: string
  public marca: string
  public ano: string

  constructor(props: Omit<Viatura, "id">, id?: string) {
    Object.assign(this, props)
    if (!id) {
      this.id = uuid()
    }
  }
}
