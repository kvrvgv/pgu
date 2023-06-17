import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Welcome = () => {

  const navigate = useNavigate()
  const dispath = useDispatch()
  const store = useSelector(state => state)

  const [error, setError] = useState();

  const showError = (text) => {
    setError(text)
    setTimeout(() => setError(false), 1500)
  }

  const [login, setLogin] = useState("")
  const [loginReg, setLoginReg] = useState("")
  const [pass, setPass] = useState("")
  const [pass1, setPass1] = useState("")
  const [pass2, setPass2] = useState("")

  const checkUser = () => {
    return store.users.users.find(v => v.name === loginReg)
  }

  const findUser = () => {
    return store.users.users.find(v => v.name === login && v.password === pass)
  }

  const signIn = () => {
    let user = findUser()
    if (user) {
      dispath(({ type: "add", id: user.id, name: user.name, password: user.password }));
      navigate("/cabinet")
    } else {
      showError("Неверный логин или пароль!")
    }
  }

  const signUp = () => {
    if (pass1 !== pass2) {
      showError("Введенные пароли не совпадают!")
      return
    }

    if (checkUser()) {
      showError("Нельзя регистрировать пользователей с одинаковыми именами!")
      return
    }

    dispath(({ type: "addUser", name: loginReg, password: pass1 }))
    alert("Пользователь создан!")
  }

  return (
    <>
      <div className="main_block">
          <div className="login">
            <h2>Войти</h2>
            <span>Логин</span>
            <input 
              className="input" 
              value={login} 
              onChange={(e) => setLogin(e.target.value)} 
            />
            <span>Пароль</span>
            <input 
              className="input" 
              type="password"
              value={pass} 
              onChange={(e) => setPass(e.target.value)} 
            />
            <button 
              className="button" 
              onClick={signIn} 
              disabled={!login || !pass}
            >
              Войти
            </button>
            <span 
              className="link"
            >
              Регистрация
            </span>
            <div 
              style={{textAlign: "center", minHeight: "40px", visibility: error ? "visible" : "hidden", color: "red", maxWidth: "400px"}}
            >
              {error}
            </div>
          </div>
      </div>
    </>
  );
}

export default Welcome;