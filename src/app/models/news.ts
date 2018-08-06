/**
 * news model
 */
export class News {
/**
 * news model
 * @param created date
 * @param description description
 * @param link link too article
 * @param title title
 * @param url url
 * @param enclosures img info
 */
    constructor (
        public created: number,
        public description: string,
        public link: string,
        public title: string,
        public url: string,
        public enclosures: [Enclosures]) {}
}
/**
 * enclosure model
 */
export class Enclosures {
    /**
     * length
     */
    length: String;
    /**
     * img type
     */
    type:String;
    /**
     * img url
     */
    url: String
}
