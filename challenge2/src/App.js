import {useEffect,useState} from 'react'
import axios from 'axios'
import {URL_INDEX} from './config'
import { Photo } from './components/Photo'
import Loader from 'react-loader'

function App() {
  const [albumId, setAlbumId] = useState('')
  const [photos,setPhotos] = useState(null) //{} of title and Image thumbnail
  const[reload, setReload] = useState(false)
 const queryChange =(e) =>{
  setPhotos(null)
  setAlbumId(e.target.value)
 }
  useEffect(()=>{

      if(albumId && reload){
        ( async()=>{
          const { data } = await axios.get(`${URL_INDEX}/albums/${albumId}/photos`)
            setPhotos(data)
            setReload(false)
                      
        })()
      }

  },[photos,albumId,reload])

  return (<>
          <div className="header">
            <div className="logo">ZeroTo100 </div>           
          </div>
          <div className="main">            
            <div className="panel">
              <div className="form">
                  <h1>Albums and Photo</h1>
                  <input type="number" onChange={queryChange} placeholder='Enter Album ID'/>
                  <button onClick={()=>setReload(true)}> Get Album Photos By Id</button>
                </div>
            </div>
            <div className="album-photo">
                {reload && !photos ? <Loader className='spinner' speed={0.5}/> :(                
                      photos && photos.map(({thumbnailUrl, title}) =>(                        
                          <Photo
                            key={title} 
                            imgSrc={thumbnailUrl}
                            title={title} />                          
                      ))
                )
              }
            </div>
          
          </div>
         
       </>
  );
}

export default App;
