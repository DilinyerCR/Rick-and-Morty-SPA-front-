import style from './Home.module.css';
import Cards from "../Cards/Cards";

const Home = ({ characters }) => {

  return (
    <div className={style.HomeMainContainer}>
      <Cards characters={characters} />
    </div>
  )
}

export default Home;
