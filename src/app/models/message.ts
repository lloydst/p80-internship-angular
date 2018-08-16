/**
 * message model
 */
export class Message {
    /**
     * message model
     * @param message string
     * @param showFrom string
     * @param showTill string
     * @param imgLink string
     * @param img boolean
     * @param identifier string
     */
    constructor(
        public message: string,
        public showFrom: string,
        public showTill: string,
        public imgLink: string,
        public img: boolean,
        public identifier: string
    ) { }
}
