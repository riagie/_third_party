import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "TEST" })
export class Test {
  @PrimaryGeneratedColumn({ name: "T_ID" })
  id: number;

  @Column({ name: "T_NAME", length: 200, unique: true })
  name: string;
}
