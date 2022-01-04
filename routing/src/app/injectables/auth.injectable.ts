import { AuthService } from "../services/auth.service";
export const AUTH_PROVIDERS: Array<any> = [
    { provide: AuthService, useClass: AuthService}
];
