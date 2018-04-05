export interface ISpreadForm {
  symbol: string;
  amount: number;
  side: string;
  first_order_percentage: number;
  spread: number;
  spread_step_size_percentage: number;
  dry_mode: boolean;
}
