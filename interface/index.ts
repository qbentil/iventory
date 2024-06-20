export type Action = {
    type: string;
    payload: any;
};

export type State = {
    user: any | null
};

export interface ITableColumn {
    name: string;
    selector: (row: any) => any;
    sortable?: boolean;
    searchable?: boolean;
}
