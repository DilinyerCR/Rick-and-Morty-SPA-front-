import { useSelector } from 'react-redux';
import style from './Favorites.module.css';
import Card from '../Card/Card';


const Favorites = () => {

  const myFavorites = useSelector((state) => state.myFavorites)

  return (
    <div className={style.FavoritesMainContainer}>
      {
        myFavorites?.map((fav) => {
          return <Card 
          key={fav.id}
          id={fav.id}
          image={fav.image}
          name={fav.name}
          status={fav.status}
          species={fav.species}
          location={fav.location}
          origin={fav.origin}
          />
        })  
      }
    </div>
  )
}

export default Favorites;