import style from './Cards.module.css'
import Card from "../Card/Card"
import { useSelector } from 'react-redux';


const Cards = () => {

  const allCharacters = useSelector((state) => state.allCharacters);

   return (
     <div className={style.CardsMainContainer}>
         {
             allCharacters?.map((character) => {
                 return <Card 
                 key={character.id}
                 id={character.id}
                 image={character.image}
                 name={character.name}
                 gender={character.gender}
                 status={character.status}
                 species={character.species}
                 location={character.location}
                 origin={character.origin}
                 />
             })
         }
     </div>
   )
 }
 
 export default Cards
