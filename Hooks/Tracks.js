import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const apiUrl='https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=mexico&api_key=6536ef9ae6f35b731ee6a59ddd98ac13&format=json&limit=20'

const artistUrl = 'https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=TOLE_M&api_key=6536ef9ae6f35b731ee6a59ddd98ac13&format=json&limit=5';

const LastTracksUrl = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=TOLE_M&api_key=6536ef9ae6f35b731ee6a59ddd98ac13&format=json&'

const getTopTracks = async ()=>{
    try{    
        const response = await axios.get(apiUrl);
    const tracks = response.data.tracks.track;
    const InfoMusica = await tracks.map((track)=>{
        return{
            artist: track.artist.name,
            track: track.name,
            image: track.image[2]['#text'],
            listeners: track.listeners,

        }
    });
    return(InfoMusica);

    }catch(error){
        console.log(error);
    }

}

const RecentTracks = async () => {
    try{
        const response = await axios.get(LastTracksUrl);
        const tracks = response.data.recenttracks.track;
        const recentMusic = await tracks.slice(0,10).map((track)=>{
            return{
                artist: track.artist['#text'],
                track: track.name,
                image: track.image[2]['#text'],
            }
        });
        return(recentMusic);
    }catch(error){
        console.log(error);
    }
}

const TopArtists = async () => {
    try{
        const response = await axios.get(artistUrl);
        const artists = response.data.topartists.artist;
        const topArtists = await artists.map((artist)=>{
            return{
                name: artist.name,
                image: artist.image[2]['#text'],
                
            }
        });
        return (topArtists);
    }catch(error){
        console.log('aqui',error);
    }
  

}
export  {getTopTracks, RecentTracks,TopArtists};
