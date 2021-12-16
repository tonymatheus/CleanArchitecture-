export interface SavePurchase {
  save: (puerchases: Array<PurchaseModel>) => Promise<void>;
}

type PurchaseModel = {
  id: string;
  date: Date;
  value: number;
};
