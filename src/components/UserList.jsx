import axios from "axios"
import { useEffect, useState } from "react"

const UserList = () => {

    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(data)
        console.log("data", users)
    }

    useEffect(() => {
        fetchUsers()

    })

    const style = {
       container: {
        backgroundColor: 'green',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '55px',
        cursor: 'pointer',
        fontSize: '36px',
        width: '50%',
        margin: ' auto',
        marginTop: '70px'
       },

       title: {
        textAlign: 'center',
        textDecoration: 'underline',
       },
       paraText: {
       
        fontSize: '30px',
        fontWeight: 'bold',
        padding: '10px 20px',
        cursor: 'pointer',
        width: '50%',
        margin: ' auto',

       }
       

    }

  
  return (
   <div>
     <div style={style.container}>
        <h1 style={style.title}>Users</h1>
        <ul style={style.paraText}>
            {users.map(user => (
                <li key={user.id} >{user.name}</li>
            ))}
        </ul>
    </div>
   </div>
  )
}

export default UserList