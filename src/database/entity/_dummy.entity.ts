import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "DUMMY" })
export class Dummy {
  @PrimaryGeneratedColumn({ name: "D_ID" })
  id: number;

  @Column({ name: "D_NAME", length: 200, unique: true })
  name: string;
}
