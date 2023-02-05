import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, setData } from "../Redux/Data/data";

const Home = () => {
    const { loading, data } = useSelector(store => store.data);
    console.log(data)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getData({kgp:'bhavesh'}));
    }, [])
    return (
        <>
        <Box h={'200vh'}>
            
            <Text>Home {loading}</Text>

        </Box>
        </>
    )
}

export default Home;