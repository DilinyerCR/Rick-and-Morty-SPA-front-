import { useParams } from 'react-router-dom'
import style from './Detail.module.css'
import { useSelector } from 'react-redux';

const Detail = () => {

  const { id } = useParams();
  const character = useSelector((state) => state.allCharacters.find(char => char.id === Number(id)))


  return (

    <div className={style.RealCardMainContainer}>
        <div className={style.CardMainContainer}>
    
                <div className={style.DetailCard}>
    
                    <div className={style.CardImgContainer}>
                      <img className={style.CardImg} src={character.image} alt={character.name} />
                    </div>
    
                    <div className={style.CardText}>
                        <div>
                            <h2 className={style.CardName}>{character.name}</h2>
    
                            <div className={style.CardState}>
                            <div className={style.CardStateCircle}
                            style={{backgroundColor: character.status === "Alive" ? "green" : (character.status === "unknown" ? "white" : "red")}}
                            ></div>
                            {character.status} - {character.species}</div>
                        </div>
                        
                        <div>
                            <p className={style.CardGender}>Gender: </p>
                            <p className={style.Gender}>{character.gender}</p>
                        </div>
    
                        <div>
                            <p className={style.CardLastLocation}>Last known location:</p>
                            <p className={style.CardLocation}>{character.location.name}</p>
                        </div>
    
                        <div>
                            <p className={style.CardFirstSeenTitle}>First seen in:</p>
                            <p className={style.CardFirstSeen}>{character.origin.name}</p>
                        </div>
                    </div>
    
                </div>
    
         </div>
    </div>


  )
}

export default Detail