import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Welcome = () => {

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
          <div 
            className="login"
          >
            <h2>
              Зарегистрироваться
            </h2>
            <span>Логин</span>
            <input 
              className="input" 
              value={loginReg} 
              onChange={(e) => setLoginReg(e.target.value)} 
            />
            <span>Пароль</span>
            <input 
              className="input" 
              type="password" 
              value={pass1} 
              onChange={(e) => setPass1(e.target.value)} 
            />
            <span>Повторите пароль</span>
            <input 
              className="input" 
              type="password" 
              value={pass2} 
              onChange={(e) => setPass2(e.target.value)} 
            />
            <button 
              className="button" 
              onClick={signUp} 
              disabled={!loginReg || !pass1 || !pass2}
            >
              Зарегистрироваться
            </button>
            <span 
              className="link" 
            >
              Назад к логину
            </span>
            <div 
              style={{textAlign: "center", minHeight: "40px", visibility: error ? "visible" : "hidden", color: "red", maxWidth: "400px"}}>
              {error}
            </div>
          </div>
      </div>
    </>
  );
}

export default Welcome;