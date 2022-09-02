import React from "react";
import { Paper } from "@mui/material";
import {
    Grid,
    Table,
    TableHeaderRow,
    PagingPanel,
} from "@devexpress/dx-react-grid-material-ui";
import { PagingState, CustomPaging, SortingState, IntegratedSorting } from "@devexpress/dx-react-grid";

export const COLUMNS = {
    ID: "id",
    RECORDED_AT: "recorded_at",
    BOOKIES_NAME: "bookies_name",
    DISCOUNT_TEXT: "discount_text",
    DISCOUNT_DESCRIPTION: "discount_description",
    LANDING_PAGE_URL: "landingpage_URL",
    GAME_TYPE_ID: "gametype_id",
    SOURCE_ID: "source_id",
    LANGUAGE_ID: "language_id",
    MIN_DEPOSIT: "min_deposit",
    MAX_DEPOSIT: "max_deposit",
    CUSTOMER_CHECK: "customer_check",
    NEW_CUSTOMER: "new_customer",
    BOOKIES_MARKETS_ID: "bookiesmarkets_id"
};

export const columns = [
    { name: COLUMNS.ID, title: "ID" },
    {
        name: COLUMNS.RECORDED_AT,
        title: "Offer Date",
        getCellValue: (row) => (new Date(row.recorded_at).toLocaleDateString())
    },
    { name: COLUMNS.BOOKIES_NAME, title: "Bookie Name" },
    { name: COLUMNS.DISCOUNT_TEXT, title: "Discount" },
    { name: COLUMNS.DISCOUNT_DESCRIPTION, title: "Description" },
    { name: COLUMNS.LANDING_PAGE_URL, title: "Link" },
    { name: COLUMNS.GAME_TYPE_ID, title: "Game Type" },
    { name: COLUMNS.SOURCE_ID, title: "Source ID" },
    { name: COLUMNS.LANGUAGE_ID, title: "Language" },
    { name: COLUMNS.MIN_DEPOSIT, title: "Min. Deposit" },
    { name: COLUMNS.MAX_DEPOSIT, title: "Max Deposit" },
    {
        name: COLUMNS.CUSTOMER_CHECK,
        title: "Customer Check",
        getCellValue: (row) => (row.customer_check ? "Yes" : "No")
    },
    {
        name: COLUMNS.NEW_CUSTOMER,
        title: "New Customer",
        getCellValue: (row) => (row.new_customer ? "Yes" : "No")
    },
    { name: COLUMNS.BOOKIES_MARKETS_ID, title: "Country" }
];



const TableRowCell = ({ style, ...restProps }) => (
    <Table.Cell
        {...restProps}
        style={{
            wordWrap: "break-word",
            whiteSpace: "normal"
        }}
    />
);

const DataTable = ({ rows, currentPage, take, setCurrentPage, totalCount }) => {
    return (
        <Paper>
            <Grid rows={rows} columns={columns}>
                <PagingState
                    currentPage={currentPage}
                    onCurrentPageChange={setCurrentPage}
                    pageSize={take}
                />
                <CustomPaging totalCount={totalCount} />
                <SortingState defaultSorting={[{ columnName: 'id', direction: 'asc' }]} />
                <IntegratedSorting />
                <Table cellComponent={TableRowCell} />
                <TableHeaderRow showSortingControls />
                <PagingPanel />
            </Grid>
        </Paper>
    );
};

export default DataTable;