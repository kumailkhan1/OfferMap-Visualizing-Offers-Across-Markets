import React, { useState, useEffect } from "react";
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
import { getAllOffers } from "../../services/OffersService";
import { getFilters } from "../../services/FiltersService";


const DataTable = () => {

    const AllItem = { id: 0, value: "", name: "ALL", type: "ALL" };
    const [rows, setRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [take] = useState(10);
    const [gameType, setGameType] = useState(AllItem);
    const [country, setCountry] = useState(AllItem);
    const [company, setCompany] = useState(AllItem);
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [games, setGames] = useState([]);
    const [countries, setCountries] = useState([]);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const filterby = {
            gametype_id: gameType.id,
            bookiesmarkets_id: country.id,
            bookies_name: company.name === 'ALL' ? '' : company.name,
            fromDate: fromDate ? new Date(fromDate) : null,
            toDate: toDate ? new Date(toDate) : null
        }
        async function fetchData() {
            let newRows = await getAllOffers(take * currentPage, take, filterby);
            console.log(newRows.offerings)
            setRows(newRows.offerings)
            setTotalCount(newRows.totalCount)

        }
        fetchData();
    }, [currentPage])


    useEffect(() => {
        const filterby = {
            gametype_id: gameType.id,
            bookiesmarkets_id: country.id,
            bookies_name: company.name === 'ALL' ? '' : company.name,
            fromDate: fromDate ? new Date(fromDate) : null,
            toDate: toDate ? new Date(toDate) : null
        }
        async function fetchData() {

            let newRows = await getAllOffers(0, take, filterby);
            if (newRows) {
                setRows(newRows.offerings);
                setTotalCount(newRows.totalCount)
                setCurrentPage(0);

            }
            console.log(newRows.offering, newRows.totalCount)
        }
        fetchData();
    }, [gameType, country, company, fromDate, toDate])

    useEffect(() => {
        async function fetchData() {
            let filtersData = await getFilters();
            console.log(filtersData);
            setGames(filtersData.gametypes);
            setCountries(filtersData.countries);
            setCompanies(filtersData.companies);
        }
        fetchData();
    }, [])


    return (
        <Paper>
            <Grid rows={rows} columns={columns}>
                <Filter
                    AllItem={AllItem}
                    gameType={gameType}
                    setGameType={setGameType}
                    country={country}
                    setCountry={setCountry}
                    company={company}
                    setCompany={setCompany}
                    fromDate={fromDate}
                    setFromDate={setFromDate}
                    toDate={toDate}
                    setToDate={setToDate}
                    games={games}
                    countries={countries}
                    companies={companies}
                ></Filter>
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