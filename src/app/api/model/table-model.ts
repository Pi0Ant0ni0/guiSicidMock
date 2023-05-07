export class TableColumn {
  public columnLabel!: string;
  public itemProperty!: string;
}

export class TableAction<T>{
  public actionIcon!: string;
  public actionDescription!: string;
  public isEnabled = (row: T): boolean => { return true };
  public action = (row: T): void => { };
}
