import React from 'react'
import styled from 'styled-components'
import { LuPanelLeftClose } from "react-icons/lu";


const Aside = ({aside, setAside}) => {
  const clickHandle = ()=>{
    setAside(false)
  }
  if(aside){
    return (
      <SideBar>
        <h3>Filter items according to <button onClick={clickHandle} style={{marginLeft:"10px", padding:"0px", fontSize:"30px", backgroundColor:"transparent", borderColor:"transparent"}} ><LuPanelLeftClose /></button> <hr/></h3>
      
        <Dependency >
          <p>Price Range</p>
          <hr />
          <pRange>
            <input type="number" placeholder='Minimum'/>
            <input type="number" placeholder='Maximum'/>
          </pRange>
          <div>
            <button >Filter</button>  
          </div>
        </Dependency>
        <Dependency>
          <p>Availablity</p>
          <hr />
          <form>
            <div><input type="checkbox" name='available'/> In Stock</div>
            <div><input type="checkbox" name='available'/>Online Order</div> 
            <div><input type="checkbox" name='available'/>Pre Order</div> 
          </form>
          <div>
            <button >Filter</button>  
          </div>
          
        </Dependency>
      </SideBar>
    )
  }
  
}

export default Aside

const SideBar = styled.div`
  position: fixed;
  padding: 10px;
  background-color: #fff;
  height: 100%;
  line-height: 25px;
  div {
    text-align: right;
  }
  h3{
    font-size: 25px;
  }

`
const Dependency = styled.div`
  background-color: #a0ccff;
  margin: 0px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  border-radius: 15px;
  form div{
    display: flex;
    
    font-size: 20px;
  }
  button{
    font-size: 17px;
    margin: 10px;
    padding: 5px;
    align-items: first baseline;
  }
  p{
    font-size: 28px;
    margin: 10px;
    text-align: left;
  }
  pRange input{
    padding: 5px;
    width: 150px;
    display: inline;
  }
`