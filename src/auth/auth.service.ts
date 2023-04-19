import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable({})
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: AuthDto) {
    try {
      //générer hash
      const hash = await argon.hash(dto.password);
      // go Post User makany am database
      const user = await this.prisma.user.create({
        data: {
          username: dto.username,
          password: hash,
        },
      });
      //delete user.password; // tsy apseo any am json retour ny password
      //return saved User
      // return user;

      return this.signToken(user.id, user.username);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(
            'Credentials taken / efa misy ao fa calme',
          );
        }
      }
    }
  }

  async signin(dto: AuthDto) {
    //find user by username
    const user = await this.prisma.user.findFirst({
      where: { username: dto.username },
    });
    //if user tsy miexiste throw exception
    if (!user) {
      throw new ForbiddenException('Credentials incorrect');
    }
    //comparena ny password
    const pwMatches = await argon.verify(user.password, dto.password);
    //raha diso trow exception
    if (!pwMatches) {
      throw new ForbiddenException('Credentials incorrect // diso mdp');
    }
    // delete user.password;
    //send back the user
    return this.signToken(user.id, user.username);
  }

  async signToken(
    userId: number,
    username: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      username,
    };
    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });

    return { access_token: token };
  }
}
