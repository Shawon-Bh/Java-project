import React from 'react'
import styles from './LogInSignUp.module.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const LogInSignUp = () => {
  const navigate=useNavigate()
  return (
    <>
      <h1 className={styles.heading}>Welcome To FIXAR</h1>
      <p className={styles.paragraph}>YOUR ULTIMATE CAR PROBLEM FIXER & BEST CAR ACCESSORIES ARE WAITING FOR U</p>
      <section className={styles.logInSignUp}>
        <form>
          <h2>Fill these information for Log In</h2>
          
          <div className={styles.logInForm} >
            <label htmlFor='email' >Email</label>
              <input type="email" name="email"/>
          </div>
          <div className={styles.logInForm}>
            <label htmlFor='password' >Password</label>
              <input type="password" name="password"/>
          </div>
          <div >
            <Link className={styles.signUp} to="/signUp">click for SIGN UP</Link>
          </div>         
          <div >
            <button onClick={()=>navigate("/userNewsfeed")} className={styles.btn}>Submit</button>
          </div>
        </form>
        
        <div >
          <img src="public/pngegg.png" alt="missing" />
        </div>
      </section>
    </>
    
  )
}

export default LogInSignUp
