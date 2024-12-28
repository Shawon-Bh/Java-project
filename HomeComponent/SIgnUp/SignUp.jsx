import React from 'react'
import styles from "./SignUp.module.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const navigate=useNavigate()
  return (
    <div>
      <h1 className={styles.heading}>Welcome To FIXAR</h1>
      <p className={styles.paragraph}>YOUR ULTIMATE CAR PROBLEM FIXER & BEST CAR ACCESSORIES ARE WAITING FOR U</p>
      <section className={styles.SignUp}>
        <form>
          <h2>Fill these information for SIGN UP</h2>
          <tweHolder >
            <div className={styles.logInForm} >
              <label htmlFor='firstName' >First Name</label>
                <input type="text" name="firstName"/>
            </div>
            <div className={styles.logInForm} >
              <label htmlFor='lastName' >Last Name</label>
                <input type="text" name="lastName"/>
            </div>
          </tweHolder>
          <div className={styles.logInForm} >
            <label htmlFor='dob' >Date of Birth</label>
              <input type="date" name="dob"/>
          </div>
          <div className={styles.gender} >
            <label htmlFor='gender' >Gender : </label>
              <input className={styles.radio} type="radio" name="gender"/> Male
              <input className={styles.radio} type="radio" name="gender"/> Female
              <input className={styles.radio} type="radio" name="gender"/> Other
          </div>
          { <div className={styles.gender} >
            <label htmlFor='Merital Status' >Sign Up As: </label>
              <input className={styles.radio} type="radio" name="Merital Status"/> Client
              <input className={styles.radio} type="radio" name="Merital Status"/> Mechanic
          </div> }
          <div className={styles.logInForm} >
            <label htmlFor='religion' >Religion</label>
              <input type="text" name="religion"/>
          </div>
          <div className={styles.logInForm} >
            <label htmlFor='nationality' >Nationality</label>
              <input type="text" name="nationality"/>
          </div>
          <tweHolder >
            <div className={styles.logInForm} >
              <label htmlFor='email' >Email</label>
                <input type="email" name="email"/>
            </div>
            <div className={styles.logInForm}>
              <label htmlFor='password' >Password</label>
                <input type="password" name="password"/>
            </div>
          </tweHolder>
          <div className={styles.logInForm} >
            <label htmlFor='address' >Address</label>
              <input type="text" name="address"/>
          </div>  
          <div >
            <button onClick={()=>navigate("/LogInSignUp")} className={styles.btn}>Submit</button>
          </div>
        </form>
        
        <div >
          <img src="public/pngegg.png" alt="missing" />
        </div>
      </section>
    </div>
    
  )
}

export default SignUp
