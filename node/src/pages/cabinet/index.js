import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cabinet = () => {

  const navigate = useNavigate()
  const dispath = useDispatch()
  const store = useSelector(state => state)

  const [user, setUser] = useState(false);

  const getInitialData = () => {
    if (store.user.user.name != null) {
      setUser(store.user.user)
    } else {
      navigate("/")
    }
  }

  const logOut = () => {
    dispath(({ type: "delete" }));
    navigate("/")
  }

  useEffect(() => {
    getInitialData()
  }, [])

  return (
    <>
      <div className="main_block">
        {user && <div className="user_info">
          <div style={{display: "flex", justifyContent: "space-between", width: "180px"}}>
            <span className="user_text">ID: <b>{user.id}</b></span>
            <span className="user_text">Имя: <b>{user.name}</b></span>            
          </div>
          <button className="button" onClick={logOut}>Выйти</button>
        </div>}
      </div>
    </>
  );
}

export default Cabinet;