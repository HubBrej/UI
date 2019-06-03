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
     fromJson(responseJson: JSON) {
        this.name=responseJson['name']
        this.author=responseJson['author']
        this.date=responseJson['date']
        this.type=responseJson['type']
        this.id=responseJson['id']
      }
}