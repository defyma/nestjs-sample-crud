import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    findAll() {
        return this.userRepository.find({
            username: Like('%udin%'),
        });
    }

    findOne(id: number) {
        // let data = this.userRepository.
        return this.userRepository.findOneOrFail(id);
    }

    create(data: UserDto) {
        const user = new User();
        user.username = data.username;
        user.password = data.password;
        user.id_hak_akses = data.id_hak_akses;
        user.id_pegawai = data.id_pegawai;
        user.forgot_token = data.forgot_token;

        return this.userRepository.save(user);
    }

    update(data: UserDto, id: number) {
        return this.userRepository.save({ ...data, id: Number(id) });
    }

    delete(id: number) {
        return this.userRepository.delete(id);
    }
}
