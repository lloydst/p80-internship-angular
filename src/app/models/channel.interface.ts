
export interface Channel {
    channel: string; // required field with minimum 5 characters
    path: Paths[]; // user can have one or more addresses
}

export interface Paths {
    pathurl: string;  // required field
    description: string;
    componentName
}