import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "D" })
export class D {
  @PrimaryGeneratedColumn({ name: "D_ID" })
  id: number;

  @Column({ name: "D_NAME", length: 200, unique: true })
  name: string;
}
