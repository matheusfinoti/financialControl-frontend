export interface Transaction {
  id: number;
  transactionDate: string;       // datas vêm como string no JSON
  transactionValue: number;
  transactionDescription: string;
  transactionIdPaymentMethod: number;
  transactionIdCategory: number;
}