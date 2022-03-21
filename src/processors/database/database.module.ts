import { Global, Module } from '@nestjs/common'
import { UserModel } from '../../modules/user/user.model'
import { databaseProvider } from './database.provider'
import { DatabaseService } from './database.service'

import { getProviderByTypegooseClass } from '~/transformers/model.transformer'

const models = [UserModel].map((model) => getProviderByTypegooseClass(model))
@Module({
  providers: [DatabaseService, databaseProvider, ...models],
  exports: [DatabaseService, databaseProvider, ...models],
})
@Global()
export class DatabaseModule {}
