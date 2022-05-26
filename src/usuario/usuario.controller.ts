import { Body, Controller, Post, Get } from '@nestjs/common';
import { Usuario } from './Usuario';
import { UsuarioService } from './usuario.service';

@Controller()
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post('cria')
  cria(@Body() usuario): Usuario {
    const usuarioCriado = this.usuarioService.cria(usuario);
    console.log(usuario);
    return usuarioCriado;
  }

  @Get('lista')
  lista() {
    return this.usuarioService.lista();
  }
}
