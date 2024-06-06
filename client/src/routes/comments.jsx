import { Box, ListItem } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import FirstModal from "../components/FirstModal";

export default function Comments() {
    
    const data = useLoaderData()

    const render = () => {
        return (<Box sx={{display: 'flex', justifyContent: 'center'}}>
            {Object.keys(data.comments).map((key) => 
                <ListItem>
                {/* {data.comments[key]} */}
                {/* {let {newStr} = str.substring(0, str.length - 5)} */}
                <FirstModal card={data.comments[key]}/>
                </ListItem>
            )}
        </Box>)
    }
    // const render = () => {
    //     return (<Box> 
    //         {Object.keys(data.comments).map((key) => {
    //         const str = data.comments[key]
    //         const newStr = str.substring(0, str.length - 5)
    //         return (<ListItemButton onClick={handleOpen} sx={{ textAlign: 'center'}} component="button" key={newStr}>
    //             <ListItemText primary={newStr} /> 
    //         </ListItemButton>
    //     </Box>}))}
    // }
    console.log(data)
    return(<Box 
        sx={{display: 'flex', 
        justifyContent: 'flex-start', 
        flexDirection: 'column', 
        flexWrap: 'wrap', 
        width: '50vw',
        alignSelf: 'center',
        border: '1px solid',
        borderRadius: '15px'}}>
        {render()}
    </Box>)
}