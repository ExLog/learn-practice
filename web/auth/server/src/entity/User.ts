import * as argon2 from "argon2";
import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "users" })
class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    username!: string;

    @Column({ select: false })
    password!: string;

    @BeforeInsert()
    @BeforeUpdate()
    private async hashPassword() {
        this.password = await argon2.hash(this.password);
    }

    verifyPassword(realPassword: string): Promise<boolean> {
        return argon2.verify(this.password, realPassword);
    }
}

export default User;
