import {Box, Button, Container, List, ListItem, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import getFolders from "../../functions/getFolders";
import MyModal from "../MyModal";
import { brown } from "@mui/material/colors";
import Tasks from "./Tasks";

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };

export default function AdminContent(props) {
    const [alignment, setAlignment] = useState('all');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    
    return (<Container>
        <ToggleButtonGroup
            sx={{color: brown[200], position: 'absolute', top: 125}}
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            >
            <ToggleButton value="all">Все</ToggleButton>
            <ToggleButton value="opened">Открытые</ToggleButton>
            <ToggleButton value="closed">Закрытые</ToggleButton>
        </ToggleButtonGroup>
        {alignment === 'all' && <Tasks tv=''/>}
        {alignment === 'opened' && <Tasks tv='true'/>}
        {alignment === 'closed' && <Tasks tv='false'/>}
    </Container>)
}