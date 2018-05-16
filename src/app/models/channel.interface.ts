
export interface Channel {
    channel: string; // required field with minimum 5 characters
    path: Paths[]; 
}

export interface Paths {
    pathurl: string;  // required field
    description: string;
    componentName: string;
    delay: number
}