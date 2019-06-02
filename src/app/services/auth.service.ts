export class AuthService {
    public isAuth: boolean
    public token: string
    constructor() {
        this.isAuth = false
        this.token=''
    }
}