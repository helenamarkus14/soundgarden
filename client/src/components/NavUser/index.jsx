import { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import * as userService from "../../api/user.service";
import apiClient from "../../api/axios.config";
import { Menu, Transition } from '@headlessui/react';

function Login() {
    const [token, setToken] = useState("")
    const [userId, setUserId] = useState();
    const [userImage, setUserImage] = useState();
    const [userDisplay, setUserDisplay] = useState("");
    const [userSpotifyURL, setUserSpotifyURL] = useState("");
    // const scope = "playlist-read-collaborative playlist-modify-public";
    // const getToken = () => {
    //     let urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
    //     let token = urlParams.get('access_token');
    // }


    const logout = () => {
        setToken("");
        setUserId("");
        setUserImage("");
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("id");
    }


    const userInfoWrite = async () => {
        let data = {"display_name": userDisplay, "id": userId, "image_url": userImage, "spotify_url": userSpotifyURL}
        let res = await userService.createUser(data).then(() => {
            console.log("Successfully wrote user info into db");
        });
        if (!res === 201) {
            console.log(res.status);
        }
    }

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
        //get current user info
        axios('https://api.spotify.com/v1/me', {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
          }).then(response=> {
            setUserId(response.data.id);
            setUserImage(response.data.images[0].url);
            setUserDisplay(response.data.display_name);
            setUserSpotifyURL(response.data.external_urls.spotify);
            window.localStorage.setItem("id", response.data.id);
            userInfoWrite();
          }).catch(error => console.log(error)) 
    }, [])
    return(
    //     <>
    //     <div className="flex">
    //     <img src={userImage ? userImage : "/images/SGLogo.jpeg"} className=" flex flex-col items-center justify-center h-12 w-12 rounded-full center" alt="missing"/>

    //     {!token ?
     
    //  <button className="flex items-center justify-center w-24 text-sm mr-1 my-3 font-sm text-white bg-yellow hover:bg-opacity-75 rounded-lg"> <a href={`${process.env.REACT_APP_AUTHORIZE_URL}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_DEV_REDIRECT_URI}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}&scope=${process.env.REACT_APP_SCOPE}`}>Login with Spotify</a></button> 
    //      : <button className="flex items-center justify-center w-24 text-sm mr-1 my-3 font-sm text-white bg-yellow hover:bg-opacity-75 rounded-lg" onClick={logout}>Logout</button>
   
    //     } 
    //     </div>

         
    
    //         </>

        <div className="fixed top-16 w-56 text-right">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="focus:outline-none inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                Options
              
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="focus:outline-none absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-1 py-1 ">
                   
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      )
      }
    
    
    
            

    export default Login;

