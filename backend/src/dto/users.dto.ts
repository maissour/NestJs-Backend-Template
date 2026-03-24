export interface UserDto {
    id: number;
    name: string;
    email: string;
}

export interface LoginDto {
    email: string;
    password: string;
}

export interface AuthResposnse {
    accessToken: string;
    userId: number;
    name: string;
}