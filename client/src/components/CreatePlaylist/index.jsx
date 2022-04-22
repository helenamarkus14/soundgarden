import axios from "axios";
import {useState, useEffect} from "react";


const CreatePlaylist = async (e) => {
    const [token, setToken] = useState("");

    const [userData, setUserData] = useState([]);
    
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        // getToken()


        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])



    // const userData = await axios.get("https://api.spotify.com/v1/me", {
    //     headers: {
    //         "Content-type": "application/json",
    //         Authorization: `Bearer ${token}`,
    //         "Access-Control-Allow-Origin": "*"
    //     },
    //     params: {
            
    //     }
        
    // })
    // .then((response) => {
    //     console.log(response);
    // }, (error) => {
    //     console.log(error);
    // });

    // console.log(userData);

    const getUserId = async (e) => {
            e.preventDefault()
            const {data} = await axios.get("https://api.spotify.com/v1/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                params: {
                }
            })
            // setUserData(data)
            console.log(userData)
        }

   return (
    <button onClick={CreatePlaylist}>createPlaylist</button>
   )
}

export default CreatePlaylist;