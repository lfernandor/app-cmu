import {Entity, model, property} from '@loopback/repository';

@model()
export class Lugares extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nombreLugar: string;

  @property({
    type: 'string',
    required: true,
  })
  ubicacion: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idLugar?: number;


  constructor(data?: Partial<Lugares>) {
    super(data);
  }
}

export interface LugaresRelations {
  // describe navigational properties here
}

export type LugaresWithRelations = Lugares & LugaresRelations;
