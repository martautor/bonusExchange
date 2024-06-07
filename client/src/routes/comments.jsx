import { Box, ListItem } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import FirstModal from "../components/FirstModal";
import { grey } from "@mui/material/colors";

export default function Comments() {
    
    const data = useLoaderData()

    const render = () => {
        return (<Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center'}}>
            {Object.keys(data.comments).map((key) => 
                <ListItem sx={{backgroundColor: grey[300], borderRadius: '20px'}}>
                    <FirstModal card={data.comments[key]}/>
                </ListItem>
            )}
        </Box>)
    }
    console.log(data)
    return(<Box 
        sx={{display: 'flex', 
        justifyContent: 'flex-start', 
        flexDirection: 'column', 
        flexWrap: 'wrap', 
        width: '25vw',
        alignSelf: 'center',
        border: '1px solid',
        borderRadius: '15px'}}>
        {render()}
    </Box>)
}