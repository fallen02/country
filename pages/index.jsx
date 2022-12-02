import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material'
import { useState, useEffect } from 'react'
import { spacing } from '@mui/system'
import { Spinner } from 'grommet'


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
  return(<Grid container direction="row" alignItems="center" justifyContent={"center"}>
    <Spinner size='large'/>
  </Grid>)

  return (
    <div>
      <Head>
        <title>Country</title>
      </Head>

      {/* <Grid sx={{flexGrow: 1}} container spacing={2}></Grid> */}
        {/* <Grid item sx = {12}></Grid> */}
          <Grid container justifyContent={"center"} spacing = {2}>
            {data.map(country => (
              
              <Grid key={country.name} item>
                <Card sx={{Width: 200}}>
                <CardMedia 
                  component="img"
                  height = '140'
                  image = {country.flags.svg}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' color = 'text.secondary'>
                    {country.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href={`/${encodeURIComponent(country.id)}`}>
                  <Button  size='small' onClick={handleClick}>View Details</Button>
                  </Link>
                </CardActions>
              </Card>
              </Grid>
              
            ))}
          </Grid>
        
      
      
    </div>
  )
  
}
