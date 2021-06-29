import {useEffect,useState} from 'react'
import axios from 'axios'
import {URL_INDEX} from './config'
import { Photo } from './components/Photo'

function App() {
  const [albumId, setAlbumId] = useState('')
  const[isLoading, setIsLoading] = useState(false)
  const [photos,setPhotos] = useState(null) //{} of title and Image thumbnail
  const[reload, setReload] = useState(false)
  
  const fetchPhotos = async () => {
    
   
}
  useEffect( ()=>{

      setIsLoading(true)
      if(albumId && reload){
        ( async()=>{
          return await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
          .then(({data})=>{
            setPhotos(data)
            setReload(false)
          })
          .catch(err => console.log(err))
        })()
      }

  },[photos,isLoading,albumId,reload])

  return (<>
          <header></header>
          <main>
            
              <input type="number" onChange={(e)=>setAlbumId(e.target.value)}/>
              <button onClick={(e)=>setReload(true)}> Get Album Photos By Id</button>
            

            { photos &&
              photos.map(({thumbnailUrl, title}) =>(
                <Photo
                  key={title} 
                  imgSrc={thumbnailUrl}
                  title={title} />
              ))
              
            } 
          </main>
       </>
  );
}

export default App;
