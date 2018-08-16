/**
 * used in the 'channel' froms
 */
export class Channel {
    /**
     * channel name (its the identifier)
     */
    channel: string; // required field with minimum 5 characters
    /**
     * array of paths it will navigate too
     */
    path: Paths[];
}
/**
 * used within the Channel interface
 */
export class Paths {
    /**
     * ${host}/pathurl
     */
    pathurl: string;
    /**
     * description
     */
    description: string;
    /**
     * a simple name to remember (you could use description for this as well)
     */
    componentName: string;
    /**
     * the delay it uses to move on to the next component
     */
    delay: number;
}
