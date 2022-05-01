import React, {useState, useEffect} from 'react'
import * as userService from "../../api/user.service"
import { NavLink, useParams } from 'react-router-dom';
import UserCard from '../../components/UserCard';

const UsersPage = () => {
const [users, setUsers] = useState([]);


const fetchUsers = async () => {
    await userService.indexUser().then((res) => {
        setUsers(res.data.data.reverse());
    })
}
useEffect(() => {
    fetchUsers();
    
	}, []);
    
  return (
      <>
      <h2 className="mt-6 mb-1 px-7 text-2xl font-bold tracking-wide lg:text-3xl">Users</h2>
    
    <div className="grid lg:grid-cols-3">
        {/* <NavLink to="/concerts/new"><button className="text-yellow bg-black font-bold rounded-full px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">+ Create New Concert</button></NavLink> */}
        
        {users.map((user, i) => {
            return (
                <>
                
                <UserCard 
                    key={i}
                    displayname={user.display_name}
                    id={user.id}
                    imageurl={user.image_url}
                    spotifyurl={user.spotify_url}
                />
                </>
            )
        })}
    </div>
  
    </>
  )
}

export default UsersPage;