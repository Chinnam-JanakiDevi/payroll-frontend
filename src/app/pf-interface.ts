export interface PfInterface {
    wef_date: Date;
    catg: string;
    pf_per: number;
    fpf_per:number;
    epf_per:number;
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


