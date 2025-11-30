export interface VwTransactionDetailsDto {
  categoryName: string;
  paymentMethod: string;
  id: number;
  transactionDate: string;
  transactionDescription: string;
  transactionIdCategory: number;
  transactionIdPaymentMethod: number;
  transactionValue: number;
}