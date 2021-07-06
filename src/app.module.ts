import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './users/user.controller';
import { User } from './users/user.entity';
import { UserService } from './users/user.service';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: '127.0.0.1',
            port: 3306,
            username: 'root',
            password: '1234567890',
            database: 'ukm_project',
            autoLoadEntities: true,
            synchronize: false,
        }),
        TypeOrmModule.forFeature([User]),
    ],
    controllers: [UserController],
    providers: [UserService],
})
export class AppModule {}
