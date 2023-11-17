import { Organisateurs } from "./organisateurs";
import { Partenaires } from "./partenaires";

export class Events {
    constructor(
        public id:number,
        public image:string,
        public nom:string,
        public lieu:string,
        public date:Date,
        public description:string,
        public partenaire:Partenaires[],
        public organisateur:Organisateurs[]

    ){
    }
}
