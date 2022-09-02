import React from "react";
import { Paper, styled, Link } from "@mui/material";
import {
    Grid,
    Table,
    TableHeaderRow,
    PagingPanel,

} from "@devexpress/dx-react-grid-material-ui";
import { PagingState, CustomPaging, SortingState, IntegratedSorting, } from "@devexpress/dx-react-grid";
import { LandingPageProvider, TableRowCell, COLUMNS, columns } from "./utils";
import { Filter } from './filter';


const DataTable = ({ rows, currentPage, take, setCurrentPage, totalCount }) => {

    return (
        <Paper>
            <Grid rows={rows} columns={columns}>
                <LandingPageProvider for={[COLUMNS.LANDING_PAGE_URL]} />
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