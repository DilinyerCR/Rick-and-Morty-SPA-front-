import { useDispatch, useSelector } from 'react-redux';
import style from './Favorites.module.css';
import Card from '../Card/Card';
import { filterByGender, orderByName } from '../../redux/actions/actions';


const Favorites = () => {

  const myFavorites = useSelector((state) => state.filteredCharacters);
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    const value = event.target.value;
    dispatch(filterByGender(value));
  }

  const handleOrder = (event) => {
    const value = event.target.value;
    dispatch(orderByName(value));
  }

  return (
    <div className={style.FavoritesMainContainer}>

      <div className={style.SelectorsContainer}>
        <select name="gender" onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>

        <select name="order" onChange={handleOrder}>
          <option value="A">Ascending</option>
          <option value="B">Descending</option>
        </select>
      </div>

      <div className={style.FavoritesCardsContainer}>
        {
          myFavorites?.map((fav) => {
            return <Card 
            gender={fav.gender}
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
      
    </div>
  )
}

export default Favorites;