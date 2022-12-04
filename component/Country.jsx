import Link from 'next/link'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material'

export default function(country){
    console.log(country.props)
    return(
        <>
        
        <Card sx={{ Width: 200 , height: 200 } } onClick = {console.log(country.props.name)}>
            <CardMedia
            component="img"
            height='140'
            image={country.props.flag} />
            <CardContent>
            <Typography gutterBottom variant='h5' color='text.secondary'>
                {country.props.name}
            </Typography>
            </CardContent>
            <CardActions>
            <Link href={`/${encodeURIComponent(country.props.id)}`}>
                <Button size='small' onClick={console.log("")}>View Details</Button>
            </Link>
            </CardActions>
        </Card>
        
        </>
    )
}