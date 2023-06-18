import React, { useState } from 'react'
import Header from '../../componunts/Header'
import { StyledBox, StyledTextField } from './StyledInput'
import { Typography, FormControl } from '@mui/material'
import Button from '@mui/material/Button';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

const AddBook = () => {
  const navigate = useNavigate();

  //  initailize my state by useState hook to handel input data 
  const [formData, setFromData] = useState({})
  console.log("formData", formData)

  // this function handels my input data 
  const handleChange = (event) => {
    const { name, value } = event.target;

    // it will update my state 
    setFromData((preData) => ({
      ...preData,
      [name]: value
    }))
  }


  // handle submit 
  const handleSubmit = async (event) => {
    event.preventDefault();   // this is only requre when we submit out form by onSubmit bz then data is will going to loss, this code helps to save data when page is refresh
    
    //integration of api 
    await axios.post(`https://book-library-data.onrender.com/save-book-data`, formData).then((res)=> {
      if(res){
        navigate('/view-book')
      }
    }).catch( error =>{
      console.log("error",error)
    })
 
  }
  return (
    <div>
      <Header />
      <StyledBox>
        <Typography variant='h2' align='center'> Add your book </Typography>
        <FormControl onSubmit={handleSubmit} sx={{ display: `flex`, alignItems: `center` }}>
          <StyledTextField id="outlined-basic" label="Book id" type='text' onChange={handleChange} name='book_id' variant="outlined" />
          <StyledTextField id="outlined-basic" label="Book name" type='text' onChange={handleChange} name='book_name' variant="outlined" />
          <StyledTextField id="outlined-basic" label="Book description" type='text' onChange={handleChange} name='book_description' variant="outlined" />
          <StyledTextField id="outlined-basic" label="Auther name" type='text' onChange={handleChange} name='auther_name' variant="outlined" />
          <StyledTextField id="outlined-basic" label="Cover image" type='text' onChange={handleChange} name='cover_image' variant="outlined" />
          <Button onClick={handleSubmit} variant="contained" sx={{ m: 3 }} type="submit">Submit</Button>
        </FormControl>
      </StyledBox>
    </div>
  )
}

export default AddBook


