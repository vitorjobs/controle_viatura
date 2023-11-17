import { PrismaClient } from "@prisma/client"
import { IVtrRepository } from "../IVtrlRepository"
import { Viatura } from "../../entities/Viatura"

export class PostgresVtrRepository implements IVtrRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async findByPlaca(placa: string): Promise<Viatura> {
    const viatura = await this.prisma.viatura.findFirst({
      where: {
        placa: placa,
      },
    })

    return viatura
  }

  async save(vtr: Viatura): Promise<void> {
    await this.prisma.viatura.create({
      data: vtr,
    })
  }

  async list(): Promise<Viatura[]> {
    const viaturas = await this.prisma.viatura.findMany()

    return viaturas
  }
}
// private viaturas: Viatura[] = []

// async findByEmail(placa: string): Promise<Viatura> {
//   const viatura = this.viaturas.find((viatura) => viatura.placa === placa)

//   return viatura
// }

// async save(vtr: Viatura): Promise<void> {
//   this.viaturas.push(vtr)
// }
// }
