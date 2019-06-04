import { Document } from "../models/Doc.model"
import { Injectable } from '@angular/core';

export class DocService {
    public doc: Document

    constructor() {
        this.doc=new Document()
    }
}