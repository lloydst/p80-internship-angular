/**
 * a model
 */
export class Message {
/**
 * message model
 * @param message string
 * @param showFrom string
 * @param showTill string
 */
    constructor(
      public message: string,
      public showFrom:string,
      public showTill:string
    ) {  }
  
  }