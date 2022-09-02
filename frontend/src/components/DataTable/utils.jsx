import { DataTypeProvider } from "@devexpress/dx-react-grid";
import { Table } from "@devexpress/dx-react-grid-material-ui";

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
    {
        name: COLUMNS.GAME_TYPE_ID,
        title: "Game Type",
        getCellValue: (row) => (row.gametype_id.type)
    },
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
    { name: COLUMNS.BOOKIES_MARKETS_ID, title: "Country", getCellValue: (row) => (row.bookiesmarkets_id.name) }
];


export const LandingPageFormatter = ({ value }) => {
    if (!value || value == "n/a") {
        return "N/A";
    }
    return (
        <a href={value} rel="external">See Offer</a>
    );
};

export const LandingPageProvider = (props) => (
    <DataTypeProvider formatterComponent={LandingPageFormatter} {...props} />
);


export const TableRowCell = ({ style, ...restProps }) => (
    <Table.Cell
        {...restProps}
        style={{
            wordWrap: "break-word",
            whiteSpace: "normal"
        }}
    />
);

