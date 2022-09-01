import React from 'react';
import { DataGrid } from '@mui/x-data-grid';



const Table = ({ rows, columns }) => {
    return (
        <div style={{ height: "700px", width: '100%' }}>
            <DataGrid
                sx={{
                    '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': { py: '15px' },
                    '& .MuiDataGrid-row': { borderTopColor: '#181c44', borderTopStyle: 'solid' } 
                }}
                getRowHeight={() => 'auto'}
                pageSize={25}
                rows={rows}
                columns={columns}
            />
        </div>
    );
}

export default Table;