import axios from 'axios'
import React, { useEffect, useState } from 'react'

const MyNotes = () => {
  const[apiData , setApiData] = useState([])
  const loadData = async()=>{
    try {
      let api = `http://localhost:8000/user/shownote/?userid=${localStorage.getItem("id")}`
      const res = await axios.get(api)
      console.log(res.data)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    loadData()
  } ,[])
  return (
    <>
    
    </>
  )
}

export default MyNotes