import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd'

function Posts() {
  //const [counter, setCounter] = useState()
  const [users, setUsers] = useState([])
  const [userPosts, setPosts] = useState([])


  const getData = () => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        if (res && Array.isArray(res) && res.length > 0) {
          setUsers(res)
        } 
      })

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resPost => resPost.json())
      .then(resPost => {
        if (resPost && Array.isArray(resPost) && resPost.length > 0) {
          setPosts(resPost)
        } 
      })
    
  }


  const loadUsers = () => {
    getData()
  }

  useEffect(()=>{
    getData()
    
  }, [])

  

  const styles = {
    backgroundColor: 'FAF0E6'
  }
  return(
    <>
      <h2 style={styles}>User List by SM_LI.AL</h2>
      <div style={{margin: 20}}>
        {users.length > 0 &&
          users.map(user => {
            return (
              
              <Card title={user.name} key={Math.random()} style={{width: 800, margin:10, marginLeft: 500 }} headStyle={{backgroundColor: '#FAF0E6'}}>
              <p style={{fontFamily: 'Montserrat'}}>Email: {user.email}</p>
              <Row gutter={10}>  
               { 
                
                userPosts.filter(post => post.userId === user.id).map(post =>{
                  return(
                    
                    <Col span={50}>
                    <Card title={post.title}  bordered={true} style={{margin:10}} headStyle={{backgroundColor: '#FAF0E6'}}>
                    <p >{post.body} </p>
                    </Card>
                    </Col>
                    
                      ) 
                
                    } 
                  )
                
              }
              </Row>
            </Card>
            )
            
          })
        }
      </div>
    </>
  )
}

export default Posts;



