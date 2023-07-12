export interface HraInterface {
    wef_date: Date;
    catg: string;
    hra_per: number;
}
export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
}
export interface InsertedSuccess {
    lastRowId: string;
    rowsAffected: Number;
    Message:String;
}
export interface Read {
    Result: [];
}
export interface exampleinterface{
    id:number,
    url:string,
    names:string,
    season:string
}


