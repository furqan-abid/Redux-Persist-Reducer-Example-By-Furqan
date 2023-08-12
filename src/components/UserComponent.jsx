import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setName, userName } from '../features/userSlice'

const UserComponent = () => {
  const user = useSelector(userName)


  const dispatch = useDispatch()


  const handleSetUser = (e) =>{
    const {value} = e.target;
    const payload = value
    dispatch(setName(payload))
  }

  return (
    <div style={{width:'100vw',height:'100vh',display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}}>
      <div>{user}</div>
      <div>
      <label htmlFor="userName">Enter User Name</label>
      <input type="text" name="userName" id="userName" onChange={handleSetUser}/>
      </div>

    </div>
  )
}

export default UserComponent