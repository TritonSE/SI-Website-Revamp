/**
 * Newsletters page containing all of Sakyadhita's newsletters. Includes
 * the ability to view, edit, and post newsletter details and thumbnail
 * photos.
 *
 * @summary     Newsletters Section
 * @author      Elias Fang
 */

import React from "react";
import {
    Pagination,
    Box,
    Button,
    TextField,
} from "@mui/material";

import "../../css/Newsletters.css";

export default function Newsletters() {
    return (
        <div className="Newsletters">
            <section className="top-container">
                <h1>Newsletters</h1>
            </section>
            <section className="bottom-container">
                <section className="left-container">
                    <Button id="add-button" variant="contained">
                        + Add New
                    </Button>
                    <Button className="serial-button" variant="outlined">
                        Volume #, Year
                    </Button>
                    <Button className="serial-button" variant="outlined">
                        Volume #, Year
                    </Button>
                    <Button className="serial-button" variant="outlined">
                        Volume #, Year
                    </Button>
                    <Button className="serial-button" variant="outlined">
                        Volume #, Year
                    </Button>
                    <Button className="serial-button" variant="outlined">
                        Volume #, Year
                    </Button>
                    <Button className="serial-button" variant="outlined">
                        Volume #, Year
                    </Button>
                    <Button className="serial-button" variant="outlined">
                        Volume #, Year
                    </Button>
                    <Button className="serial-button" variant="outlined">
                        Volume #, Year
                    </Button>
                    <Button className="serial-button" variant="outlined">
                        Volume #, Year
                    </Button>
                    <Button className="serial-button" variant="outlined">
                        Volume #, Year
                    </Button>
                    {/* <ButtonGroup orientation="vertical" variant="outlined">
                        
                    </ButtonGroup> */}
                    {/* <ToggleButton>Volume #, Year</ToggleButton> */}
                    {/* <ToggleButtonGroup orientation="vertical">
                        <ToggleButton>Volume #, Year</ToggleButton>
                        <ToggleButton>Volume #, Year</ToggleButton>
                        <ToggleButton>Volume #, Year</ToggleButton>
                        <ToggleButton>Volume #, Year</ToggleButton>
                        <ToggleButton>Volume #, Year</ToggleButton>
                        <ToggleButton>Volume #, Year</ToggleButton>
                        <ToggleButton>Volume #, Year</ToggleButton>
                        <ToggleButton>Volume #, Year</ToggleButton>
                        <ToggleButton>Volume #, Year</ToggleButton>
                        <ToggleButton>Volume #, Year</ToggleButton>
                    </ToggleButtonGroup> */}
                    <Pagination count={2} color="secondary" />
                </section>
                <section className="right-container">
                    <Box className="form" component="form">
                        <h3>Details</h3>
                        <TextField required id="outlined-required" label="Volume #" />
                        <TextField required id="outlined-required" label="Number #" />
                        <TextField required id="outlined-required" label="Year" />
                        <TextField required id="outlined-required" label="PDF link" />
                        <h3>Thumnail Image</h3>
                        <TextField required id="outlined-required" label="Insert img link" />
                    </Box>
                    <Button id="post-button" variant="contained">
                        Post
                    </Button>
                </section>
            </section>
        </div>
    );
}
