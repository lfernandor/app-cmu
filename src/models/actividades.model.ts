import {Entity, model, property} from '@loopback/repository';

@model()
export class Actividades extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nombreActividad: string;

  @property({
    type: 'string',
    required: true,
  })
  categoria: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idActividad?: number;


  constructor(data?: Partial<Actividades>) {
    super(data);
  }
}

export interface ActividadesRelations {
  // describe navigational properties here
}

export type ActividadesWithRelations = Actividades & ActividadesRelations;
