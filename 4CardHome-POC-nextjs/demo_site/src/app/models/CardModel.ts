export class CardModel {
    _id?: string | null;
    eyebrow: string | undefined;
    title: string | undefined;
    body: string | undefined;
    cta: string | undefined;
    order: number | undefined;
    createdAt: Date;
    modifiedAt : Date;

    constructor() {
        this._id = null;
        this.eyebrow = "";
        this.title = "";
        this.cta = "";
        this.body = "";
        this.order = 0;
        this.createdAt = new Date();
        this.modifiedAt = new Date();
    }
}