export interface ITransaction {
    id?:number,
    happening: string,
    amount: number,
    report: "RR" | "BR"
}