import { Document } from "../models/Doc.model"

export class DocService {
    public doc: Document

    constructor() {
        this.doc=new Document()
    }
}