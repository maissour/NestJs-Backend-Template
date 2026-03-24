import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { LoginDto } from "@/dto/users.dto";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'my-local'){
    constructor(private authService: AuthService){
        super({
            usernameField: 'email',
            passwordField: 'password',
        });
    }

    async validate(email: string, password: string){
        const input: LoginDto = {
            email: email,
            password: password
        }

        const authenticate = await this.authService.authenticate(input);

        if(!authenticate){
            throw new UnauthorizedException();
        }

        return authenticate;
    }
}