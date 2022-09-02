import React from "react";
import { Autocomplete, TextField, Grid as MUIGrid } from "@mui/material";

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export const Filter = ({
  gameType,
  setGameType,
  company,
  setCompany,
  country,
  setCountry,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  games,
  countries,
  companies,
  AllItem
}) => {
  return (
    <MUIGrid container marginBottom={"10px"}>
      <MUIGrid item md={2.2} xs={12} sm={12} margin={"10px"}>
        <Autocomplete
          disableClearable
          options={[AllItem, ...games]}
          value={gameType}
          style={{
            borderRadius: 4,
            fontSize: 12
          }}
          fullWidth
          getOptionLabel={(option) => {
            return option.type || '';
          }}
          onChange={(evt, newValue) => { setGameType(newValue) }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Game Type"
              placeholder={"Select Game Type"}
            />
          )}
        />
      </MUIGrid>

      <MUIGrid item md={2.2} xs={12} sm={12} margin={"10px"}>
        <Autocomplete
          disableClearable
          options={[AllItem, ...countries]}
          value={country}
          style={{
            borderRadius: 4,
            fontSize: 12
          }}
          fullWidth
          getOptionLabel={(option) => {
            return option.name;
          }}
          onChange={(evt, newValue) => setCountry(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Country"
              placeholder={"Select Country"}
            />
          )}
        />
      </MUIGrid>

      <MUIGrid item md={2.2} xs={12} sm={12} margin={"10px"}>
        <Autocomplete
          disableClearable
          options={[AllItem, ...companies]}
          value={company}
          style={{
            borderRadius: 4,
            fontSize: 12
          }}
          fullWidth
          getOptionLabel={(option) => {
            return option.name;
          }}
          onChange={(evt, newValue) => setCompany(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Company"
              placeholder={"Select Company"}
            />
          )}
        />
      </MUIGrid>

      <MUIGrid item md={2.2} xs={12} sm={12} margin={"10px"}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            fullWidth
            label="From"
            value={fromDate}
            onChange={(newValue) => {
              setFromDate(newValue);
            }}
            renderInput={(params) => <TextField fullWidth {...params} />}
          />
        </LocalizationProvider>

      </MUIGrid>

      <MUIGrid item md={2.2} xs={12} sm={12} margin={"10px"}>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            fullWidth
            label="To"
            value={toDate}
            onChange={(newValue) => {
              setToDate(newValue);
            }}
            renderInput={(params) => <TextField fullWidth {...params} />}
          />
        </LocalizationProvider>
      </MUIGrid>
    </MUIGrid>
  );
};