import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnlocalDataSource} from '../datasources';
import {Actividades, ActividadesRelations} from '../models';

export class ActividadesRepository extends DefaultCrudRepository<
  Actividades,
  typeof Actividades.prototype.idActividad,
  ActividadesRelations
> {
  constructor(
    @inject('datasources.connlocal') dataSource: ConnlocalDataSource,
  ) {
    super(Actividades, dataSource);
  }
}
