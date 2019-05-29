export class User {
    constructor(
        public login: string,
        public password: string,
        public name?: string,
        public firstname?: string,
        public groups? : string[],
        public token?: string
    ){}
}