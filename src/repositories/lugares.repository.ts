import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnlocalDataSource} from '../datasources';
import {Lugares, LugaresRelations} from '../models';

export class LugaresRepository extends DefaultCrudRepository<
  Lugares,
  typeof Lugares.prototype.idLugar,
  LugaresRelations
> {
  constructor(
    @inject('datasources.connlocal') dataSource: ConnlocalDataSource,
  ) {
    super(Lugares, dataSource);
  }
}
