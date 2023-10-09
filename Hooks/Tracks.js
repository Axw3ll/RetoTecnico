import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { apiUrl,artistUrl,LastTracksUrl } from '../const';

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
