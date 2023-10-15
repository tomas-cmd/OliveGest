export interface Ticket{
    id?: number;
    clientId?: number;
    guiaInternaId?: number;
    data?: Date;
    quantAzeitona?: number;
    estado?:string;
    classificacao?:string;
}