
import { BeforeInsert, Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from 'typeorm';
import { hashSync, genSaltSync } from 'bcrypt';
import { PrimaryGeneratedColumn } from 'typeorm';
  
  @Entity({name: 'users'})
  export class Users {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true })
    email: string;
  
    @Column()
    password: string;
  
    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp'})
    updated_at: Date;
  
    @BeforeInsert()
    async hashPassword() {
      this.password = await hashSync(this.password, genSaltSync(10));
    }
  }