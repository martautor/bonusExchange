import { Box, LinearProgress, List, ListItem } from "@mui/material";
import MyModal from "../MyModal";
import getFolders from "../../functions/getFolders";
import { useEffect, useState } from "react";
import { brown } from "@mui/material/colors";

export default function Tasks(props) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({});
    console.log(props.tv)
    useEffect(() => {
        async function fetchData() {
          await getFolders(props.tv)
          .then(response => response.json())
          .then(json => {
            setData(json)
            setLoading(false)
            })
          .catch(e => {
            e.message === 'Failed to fetch' &&
            alert('Нет связи с сервером!')
            })
        }
        fetchData()
        
      }, [props.tv])

      const render = () => {
        return (<List sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', borderRadius: 5, height: 'auto', m: 10}}>
            {Object.keys(data).map((value) => (<ListItem
            sx={{border: '1px solid', borderRadius: 10, opacity: 0.8, width: 500, m: 1, p: 0}}
                key={value}>
                <MyModal key={value} card={data[value]} value={value}/>
                </ListItem>
            ))}
        </List>) 
        }

        return (<div>
        {loading ? <Box sx={{ width: '100%', color: brown[400] }} spacing={2}><LinearProgress color="inherit" /></Box> : render()}
        </div>)
}