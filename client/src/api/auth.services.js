// const axios = require('axios')
// const querystring = require('querystring');
// let buff = new Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`);
// let authKey = buff.toString('base64');// changes key to string

// router.get('/', (req, res)=>{
//     axios.post('https://accounts.spotify.com/api/token', 
//         querystring.stringify({
//             grant_type: 'client_credentials',
//         }),
//         {
//             headers: {
//                 Authorization: `Basic ${authKey}`
//            } 
           
//     }).then((response)=>{                    
//         token = response.data.access_token
//         const config ={
//             headers:{
//                 Authorization: `Bearer ${token}`
//             }
//         }
//         let composer = req.query.composer
//         let track = req.query.track
//         let query = encodeURIComponent(`${composer} ${track}`)
//         axios.get(`https://api.spotify.com/v1/search?q=${query}&type=artist,track&offset=0&limit=20`, config)
//         .then((response)=>{                    
//             console.log(response.data)
//             let tracks = response.data.tracks.items
//             res.render('trackResults', {tracks})
//           })
//           .catch(err =>{
//             console.log(err)
//           })
//        //use search query in here'
//         console.log(token)
        
//       })
//     .catch(err=>{
//         console.log("error", err.message)
//     })
// })