import React from 'react';
import {Box, Typography, /*Button ,*/ Card , CardMedia, CardContent, /*CardAction ,*/ Chip} from '@material-ui/core'
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './style.js' ;
const PlaceDetails = ({place , selected , refProp}) => {
    const classes = useStyles();

    if(selected) refProp?.current?.scrollIntoView({behavior: "smooth", block: "start"})
    return (
        <Card elevation={6}>
            <CardMedia
                style =  {{height: 350}}
                image={place.photo ? place.photo.image.large.url : 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80'}    // check if the hotel is having some photos or not
                title = {place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Rating value={Number(place.rating)} readOnly />
                    <Typography gutterBottom variant="subtitle1">out of {place.num_reviews} reviews</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                </Box>
                {place?.awards?.map((award) =>{
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <img src={award.image.small} alt={award.display_name}/>
                        <Typography variant = "subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>

                })}
                {place?.cuisine?.map(({ name }) => {
                    <Chip key={name} size="small" label={name} className={classes.chip}/>
                })}
            </CardContent>
        </Card>
    );
}

export default PlaceDetails;

