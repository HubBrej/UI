export class Document {
    constructor(
        public name?: string,
        public author?: string,
        public date?: string,
        public type?: string,
        public id? : string
    ){}

    toJson(){
        return JSON.stringify(this);
    }
}