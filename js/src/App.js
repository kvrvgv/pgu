import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

function App() {
  const [users, setUsers] = useState(false)
  const [posts, setPosts] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)
  const getInitialData = async() => {
    let users = await fetch("https://jsonplaceholder.typicode.com/users");
    setUsers(await users.json())
    
    let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    setPosts(await posts.json())
    }
    
    useEffect(() => {
    getInitialData()
    }, [])
  return (
    <div className="App" style={{display:"flex"}}>
     <Box sx={{display :"flex",flexDirection: "column",width:"50%"}}>{(users && posts) && users.map((it, ind) => (
      <Box  key={ind} mt={1} p={2} onClick={() => setCurrentUser(it)}
      sx={{
      cursor: "pointer",
      border: currentUser.id === it.id ? "3px solid blue" : "3px solid black",
      borderRadius: "8px",
      color: "black",
      background:"white",
      transition: "all 0.2s ease-out",
      
      }}
      >
      <Box display="flex"><Box sx={{fontWeight: "600"}}>Имя:&nbsp;</Box>{it.name}</Box>
      <Box display="flex"><Box sx={{fontWeight: "600"}}>Ник:&nbsp;</Box>{it.username}</Box>
      <Box display="flex" mt={1}><Box sx={{fontWeight: "600"}}>Почта:&nbsp;</Box>{it.email}</Box>
      <Box display="flex"><Box sx={{fontWeight: "600"}}>Телефон:&nbsp;</Box>{it.phone}</Box>
      
      </Box>
      ))}</Box>
          <Box sx={{display :"flex",flexDirection: "column",width:"50%"}}>{currentUser && posts.filter(v => v.userId === currentUser.id).map((it, ind) => (
          <Box key={ind} width="auto" mt={1} p={1.5}>
          <h2 style={{textAlign: "center"}}>{it.title}</h2>
          <p>{it.body}</p>
      </Box>
      ))}</Box>
    </div>
  );
}

export default App;
