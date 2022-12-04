import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material'
import { useState, useEffect } from 'react'
import { spacing } from '@mui/system'
import { Spinner } from 'grommet'
import Country from '../component/Country'


export default function Home() {
  const [data, setData] = useState([])
  const [load , setLoad] = useState(false)

  useEffect(() => {
    //console.log('loading...')
     fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => {
          setData(data)
          setLoad(true)
        })
    
       
  }, [])
  
  function handleClick(country){
    console.log('Hlw')
  }

  if(!load) 
  return(
  <Grid container direction="row" alignItems="center" justifyContent={"center"}>
    <Spinner size='large'/>
  </Grid>
  )

  return (
    <div>
      <Head>
        <title>Country</title>
      </Head>

          <Grid container justifyContent={"center"} spacing = {2}>
            {data.map(country => (
              <Grid key={country.name} item>
                <Country props = {country}/>
              </Grid>
              
            ))}
          </Grid>
    </div>
  )
  
}
