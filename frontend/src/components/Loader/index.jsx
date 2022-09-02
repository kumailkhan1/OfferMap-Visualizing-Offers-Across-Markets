import React from "react";
import { Box, CircularProgress } from "@mui/material";

function Loader({ size, thickness, top }) {
    return (
        <Box
            sx={{
                position: "fixed",
                left: 0,
                top: top || 0,
                bottom: 0,
                right: 0,
                width: "100%",
                height: "100%"
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <CircularProgress
                size={size || 64}
                disableShrink
                thickness={thickness || 3}
            />
        </Box>
    );
}

export default Loader;