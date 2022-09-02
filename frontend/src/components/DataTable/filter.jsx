import React from "react";
import { Autocomplete, TextField, Grid as MUIGrid } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Select = ({ label, placeholder, onChange, options, ...rest }) => {
    const AllItem = { id: 1, value: "", name: "ALL" };
    return (
        <>
            <Autocomplete
                label={label}
                options={[AllItem, ...options]}
                value={rest.value}
                style={{
                    borderRadius: 4,
                    fontSize: 12
                }}
                fullWidth
                getOptionLabel={(option) => {
                    return typeof option === "string" ? option : option.name || "";
                }}
                onChange={onChange}
                renderInput={(params) => (
                    <TextField {...params} label={label} placeholder={placeholder} />
                )}
                {...rest}
            />
        </>
    );
};

export const Filter = ({
    gameType,
    setGameType,
    company,
    setCompany,
    country,
    setCountry,
    date,
    setDate,
    games,
    countries,
    companies
  }) => {
    return (
      <MUIGrid container>
        <MUIGrid item md={3} sm={12}>
          {" "}
          <Select
            label="Game Type"
            value={gameType}
            options={games}
            placeholder={"Select Game Type"}
            onChange={(value) => setGameType(value.id)}
          />
        </MUIGrid>
  
        <MUIGrid item md={3} sm={12}>
          <Select
            label="Country"
            options={countries}
            value={country}
            placeholder={"Select Country"}
            onChange={(value) => setCountry(value.id)}
          />
        </MUIGrid>
  
        <MUIGrid item md={3} sm={12}>
          <Select
            label="Company"
            value={company}
            options={companies}
            placeholder={"Select Company"}
            onChange={(value) => setCompany(value)}
          />
        </MUIGrid>
  
        <MUIGrid item md={3} sm={12}>
          <DatePicker
            label="Date"
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </MUIGrid>
      </MUIGrid>
    );
  };