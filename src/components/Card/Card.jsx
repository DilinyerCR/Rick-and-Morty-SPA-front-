import style from './Card.module.css'
import { useEffect, useState } from 'react';
import { addFav, removeCharacter, removeFav } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';


const Card = ({ id, image, name, status, species, location, origin, gender }) => {

  const [isFav, setIsFav] =  useState(false); //Este estado local solo se usa para mostrar un corazon u otro
  const dispatch = useDispatch(); //con el dispatch envio los personajes al estado global "myFavorites[]"

  // Importo el estado Global myFavorites[] para poder usarlo en el useEffect
  const myFavorites = useSelector((state) => state.myFavorites)

  // Con esta funcion muestro un corazon u otro y ademas agrego o remuevo personajes a "myFavorites[]"
  const handleFavorite = (/*Si coloco un id aqui, no funcionara, porque tomaria este id, en vez del id recibido por props*/) => {
    if(isFav) {
      setIsFav(false)
      dispatch(removeFav(id))
    } else {
      setIsFav(true)
      dispatch(addFav({ id, image, name, status, species, location, origin, gender }))
    }
  }

  // Este useEffect es para mantener los "Favs", sino al cambiar de pagina y volver se perderan
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if(fav.id === Number(id)) {
        setIsFav(true)
      }
    });
  }, [myFavorites])

  //Funcion para quitar un personaje de mi lista de personajes
  const onClose = (id) => {
    dispatch(removeCharacter(id))
    dispatch(removeFav(id))
  }


  const { pathname } = useLocation(); 
   return (
     <div className={style.CardMainContainer}>

            <div>

                <div className={style.CardImgContainer}>

                  <div className={style.CardButtonsContainer} style={{padding: pathname === "/favorites" ? "0px" : "10px"}}>
                    {
                      pathname !== '/favorites' && isFav 
                      ? <button className={style.FavButton} onClick={()=>handleFavorite()}>❤️</button>
                      : pathname === '/home' && !isFav
                      ? <button className={style.FavButton} onClick={()=>handleFavorite()}>🤍</button>
                      : <p style={{visibility: 'hidden'}}></p>
                    }

                    {pathname !== '/favorites' && <button className={style.CloseButton} onClick={() => onClose(id)} >❌</button>}
                    
                  </div>
                
                  <img className={style.CardImg} src={image} alt={name} />
                </div>

                <div className={style.CardText}>
                    <div>
                        <Link to={`/detail/${id}`} style={{textDecoration: "none"}}>
                          <h2 className={style.CardName}>{name}</h2>
                        </Link>
                        
                        <div>
                            <p className={style.CardGender}>Gender: </p>
                            <p className={style.Gender}>{gender}</p>
                        </div>

                        {/* <div className={style.CardState}> 
                          <div className={style.CardStateCircle}
                          style={{backgroundColor: status === "Alive" ? "green" : (status === "unknown" ? "white" : "red")}}
                          ></div>
                          {status} - {species}
                        </div> */}
                    </div>

                    {/* <div>
                        <p className={style.CardLastLocation}>Last known location:</p>
                        <p className={style.CardLocation}>{location.name}</p>
                    </div>

                    <div>
                        <p className={style.CardFirstSeenTitle}>First seen in:</p>
                        <p className={style.CardFirstSeen}>{origin.name}</p>
                    </div> */}
                </div>

            </div>
            
     </div>
   );
 };

 
export default Card