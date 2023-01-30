export interface ITransaction {
    id?:string,
    happening: string,
    amount: number,
    report: "RR" | "BR",
    date:Date
}