import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table
export class Usuario extends Model<Usuario> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  adress: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  active: boolean;

  @Column({
    type: DataType.STRING,
  })
  celphone: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;
}
