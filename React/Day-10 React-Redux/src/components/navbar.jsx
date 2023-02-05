import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../Redux/Data/data";
import { loginFun } from "../Redux/Login/Login";
const common = {
    display : 'flex',
    justifyContent : 'space-between'
}
const Navbar = () => {
    const { loading }  = useSelector(store => store.data);
    const { login }  = useSelector(store => store.login);
    const dispatch = useDispatch()
    useEffect(() => {
        let kr = {
            password :"hav",
            name : 'bhavesh',
            email : 'bhavesh08802gmail.com'
        }
        dispatch(setLoading(false));
        dispatch(loginFun(kr))
    }, []);

    if(loading) return <></>

    return (
        <>
            <Box pos={'relative'} border={'1px solid black'}  height={'30px'}>
                <Box display={'flex'} w='full' justifyContent={'space-between'}  position={'sticky'} top={0} bottom={0}  flexDir={{base : 'row', lg : 'row', md : 'row', sm : 'column'}}>
                    <Box w={'50%'} display="flex" >
                        <Text ml={4}>Home</Text>
                        <Text ml={4}>Product</Text>
                    </Box>
                    <Box  {...common} width={"40%"} ml={"4%"} mr={"4%"}>
                        <Text>Login</Text>
                        <Text>Logout</Text>
                    </Box>
                </Box>
            </Box>       
        </>
    )
}

export default Navbar;