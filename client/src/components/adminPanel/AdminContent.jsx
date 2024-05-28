import {Container, List, ListItem, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import getFolders from "../../functions/getFolders";
import MyModal from "../MyModal";

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
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchData() {
          const response = await getFolders()
          const json = await response.json()
          setData(await json)
        }
        fetchData()
        setLoading(false)
      }, []);
    
    
    function render() {
            return (<List>
                {Object.keys(data).map((value) => (<ListItem
                    key={value}
                    >
                        <MyModal key={value} card={data[value]} value={value}/>
                    </ListItem>
                ))}
            </List>) 
        }

    return (<Container>
        <Typography variant="h7">
        User: {props.data.user}
        
        </Typography>
        {!loading && render()}
    </Container>)
}