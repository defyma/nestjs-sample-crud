import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column({ default: null })
    password: string;

    @Column({ default: null })
    id_hak_akses: number;

    @Column({ default: null })
    id_pegawai: number;

    @Column({ default: null })
    forgot_token: number;

    // @Column({ default: false })
    // isActive: boolean;
}
