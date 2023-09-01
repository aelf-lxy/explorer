import { StatusEnum } from '@_types/status';
import { ILogsProps } from '@_components/LogsContainer/type';
export type TxnSData = {
  transactionHash: string;
  previousTransactionHash: string;
  nextTransactionHash: string;
  status: StatusEnum;
  block: string;
  blockHash: string;
  blockConfirmations: string;
  timestamp: string;
  method: string;
  from: '{}';
  to: '{}';
  tokensTransferrd: string;
  nftsTransferred: string;
  burntFee: string;
  value: string;
  transactionFee: string;
  resourcesFee: string;
  TransactionRefBlockNumber: string;
  transactionRefBlockPrefix: string;
  transactionParams: '{}';
  transactionSignature: string;
  returnValue: string;
  error: string;
  transactionSize: string;
  logs: ILogsProps[];
  total: number; //log total
};
