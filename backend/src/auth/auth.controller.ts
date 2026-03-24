import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportLocalGuard } from '@/guards/passport-local.guard';
import { PassportJwtGuard } from '@/guards/passport-jwt.guards';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('login')
    @UseGuards(PassportLocalGuard)
    async loginV2(@Request() request){
        return request.user;
    }

    @Get('me')
    @UseGuards(PassportJwtGuard)
    getUserInformationV2(@Request() request){
        return request.user;
    }
}
