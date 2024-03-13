import style from './SearchBar.module.css';
import { useState  } from 'react';
import { getCharacter, getRandom } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';


const SearchBar = () => {

  const dispatch = useDispatch();
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(id.length < 1) {
      alert("Debe introducir un id")
      return
    }

    setId('')
    dispatch(getCharacter(id))
  }

  const random = (event) => {
    event.preventDefault();
    dispatch(getRandom())
  }
  

  return (
    <div className={style.SearchMainContainer}>
        <form onSubmit={handleSubmit} className={style.SearchForm}>
          
          <div className={style.InputAndSearchContainer}>
            <input 
            className={style.SearchInput}
            type="number" 
            placeholder='Search by id' 
            value={id}
            onChange={handleChange}
            />
            <button type='submit' className={style.SearchButton}>Search</button>
          </div>
          
          <button className={style.Random} onClick={random}>🎲</button>

        </form>
    </div>
  )
}

export default SearchBar