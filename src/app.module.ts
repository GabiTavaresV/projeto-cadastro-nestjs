import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { Usuario } from './usuario/Usuario';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'cidade25',
      database: 'cadastro',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Usuario]),
    UsuarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
