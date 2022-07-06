// import axios from 'axios';


// export const getPlacesData = async (type , sw, ne) => {
//     try{
//         const { data: { data } } = await axios.get('https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary', {        
//             params: {
//                 bl_latitude: sw.lat,
//                 tr_latitude: ne.lat,
//                 bl_longitude: sw.lng,
//                 tr_longitude: ne.lng,
//             },
//             headers: {
//                 'X-RapidAPI-Key': '377a1e2c62msh7c20967ad25e6f3p162b6ajsn75daff7fc160',
//                 'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//             }
//         });

//         return data;
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// export const getWeatherData = async (lat,lng) => {
//     try{
//         const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/weather' , {
//             params: { lat: lat , lon: lng, },
//             headers: {
//                 'X-RapidAPI-Key': '377a1e2c62msh7c20967ad25e6f3p162b6ajsn75daff7fc160',
//                 'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
//             }
//         });
//         return data;
//     }
//     catch(error){
//         console.log(error)
//     }

// }


import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
            },
            headers: {
                'x-rapidapi-key': '377a1e2c62msh7c20967ad25e6f3p162b6ajsn75daff7fc160',
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            },
        });

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getWeatherData = async (lat, lng) => {
    try {
        if (lat && lng) {
            const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
                params: { lat, lon: lng },
                headers: {
                    'x-rapidapi-key': '377a1e2c62msh7c20967ad25e6f3p162b6ajsn75daff7fc160',
                    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                },
            });

            return data;
        }
    } catch (error) {
        console.log(error);
    }
};