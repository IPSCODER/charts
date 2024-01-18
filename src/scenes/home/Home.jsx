import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from '../../store/actions/actions';

const Home = () => {


  const dispatch = useDispatch()

  const data = useSelector((state) => state)
  console.log(data);

  useEffect(()=>{
    dispatch(loadUsers())
  },[])


  return (
    <div>Home</div>
  )
}

export default Home;