import { Injectable } from '@nestjs/common';
import { Usuario } from './Usuario';

@Injectable()
export class UsuarioService {
  private usuarios: Array<Usuario> = [];

  public cria(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);

    return usuario;
  }
}
