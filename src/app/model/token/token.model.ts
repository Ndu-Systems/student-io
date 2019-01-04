export interface Value {
    token: string;
}

export interface UserToken {
    value: Value;
    formatters: any[];
    contentTypes: any[];
    declaredType?: any;
    statusCode: number;
}