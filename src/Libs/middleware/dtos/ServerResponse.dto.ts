export interface ServerResponseDTOAuth{
    message: string,
    succeeded: boolean,
}

export interface ServerResponseLoginDTOAuth{
    message: string,
    succeeded: boolean,
    token: string
}