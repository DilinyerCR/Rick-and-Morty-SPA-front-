import style from "./Landing.module.css"
import Logo from '../../assets/Logo-no-bg.png'
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom"

import Rick from '../../assets/1.jpeg'
import Morty from '../../assets/2.jpeg'
import Summer from '../../assets/3.jpeg'
import Tammy from '../../assets/343.jpeg'
import Ventriloquiver from '../../assets/557.jpeg'
import HighPilot from '../../assets/591.jpeg'


const Landing = () => {
  return (
    <div className={style.LandingMainSection}>
        
        <div className={style.LandingNavContainer}>
            <div className={style.ImgContainer}>
                <img className={style.Logo} src={Logo} alt="" />
            </div>

            <div className={style.ButtonsContainer}>
                <Link to='/about'>
                    <button className={style.AboutButton}>About</button>
                </Link>

                <Link to='/login'>
                    <button className={style.LoginButton}>Login</button>
                </Link>
            </div>
        </div>

        <section className={style.TittleSection}>
            <h1 className={style.MainTittle}>The Rick and Morty World</h1>
        </section>

        <section className={style.CardsSection}>
            <div className={style.LandingCard}>
                <div>
                    <img className={style.CardImg} src={Rick} alt="" />
                </div>

                <div className={style.CardText}>
                    <div>
                        <h2 className={style.CardName}>Rick Sanchez</h2>
                        <p className={style.CardState}>Alive - Human</p>
                    </div>

                    <div>
                        <p className={style.CardLastLocation}>Last known location:</p>
                        <p className={style.CardLocation}>Citadel of Ricks</p>
                    </div>

                    <div>
                        <p className={style.CardFirstSeenTitle}>First seen in:</p>
                        <p className={style.CardFirstSeen}>Earth (C-137)</p>
                    </div>
                </div>
            </div>

            <div className={style.LandingCard}>
                <div>
                    <img className={style.CardImg} src={Morty} alt="" />
                </div>

                <div className={style.CardText}>
                    <div>
                        <h2 className={style.CardName}>Morty Smith</h2>
                        <p className={style.CardState}>Alive - Human</p>
                    </div>

                    <div>
                        <p className={style.CardLastLocation}>Last known location:</p>
                        <p className={style.CardLocation}>Citadel of Ricks</p>
                    </div>

                    <div>
                        <p className={style.CardFirstSeenTitle}>First seen in:</p>
                        <p className={style.CardFirstSeen}>unknown</p>
                    </div>
                </div>
            </div>

            <div className={style.LandingCard}>
                <div>
                    <img className={style.CardImg} src={Summer} alt="" />
                </div>

                <div className={style.CardText}>
                    <div>
                        <h2 className={style.CardName}>Summer Smith</h2>
                        <p className={style.CardState}>Alive - Human</p>
                    </div>

                    <div>
                        <p className={style.CardLastLocation}>Last known location:</p>
                        <p className={style.CardLocation}>Earth (Replacement Dimension)</p>
                    </div>

                    <div>
                        <p className={style.CardFirstSeenTitle}>First seen in:</p>
                        <p className={style.CardFirstSeen}>Earth (Replacement Dimension)</p>
                    </div>
                </div>
            </div>

            <div className={style.LandingCard}>
                <div>
                    <img className={style.CardImg} src={Tammy} alt="" />
                </div>

                <div className={style.CardText}>
                    <div>
                        <h2 className={style.CardName}>Tammy Guetermann</h2>
                        <p className={style.CardState}>Alive - Cronenberg</p>
                    </div>

                    <div>
                        <p className={style.CardLastLocation}>Last known location:</p>
                        <p className={style.CardLocation}>Earth (C-137)</p>
                    </div>

                    <div>
                        <p className={style.CardFirstSeenTitle}>First seen in:</p>
                        <p className={style.CardFirstSeen}>Earth (C-137)</p>
                    </div>
                </div>
            </div>

            <div className={style.LandingCard}>
                <div>
                    <img className={style.CardImg} src={Ventriloquiver} alt="" />
                </div>

                <div className={style.CardText}>
                    <div>
                        <h2 className={style.CardName}>Ventriloquiver</h2>
                        <p className={style.CardState}>Alive - Humanoid</p>
                    </div>

                    <div>
                        <p className={style.CardLastLocation}>Last known location:</p>
                        <p className={style.CardLocation}>Heistotron Base</p>
                    </div>

                    <div>
                        <p className={style.CardFirstSeenTitle}>First seen in:</p>
                        <p className={style.CardFirstSeen}>Plitzville Montana</p>
                    </div>
                </div>
            </div>

            <div className={style.LandingCard}>
                <div>
                    <img className={style.CardImg} src={HighPilot} alt="" />
                </div>

                <div className={style.CardText}>
                    <div>
                        <h2 className={style.CardName}>High Pilotr</h2>
                        <p className={style.CardState}>unknown - Human</p>
                    </div>

                    <div>
                        <p className={style.CardLastLocation}>Last known location:</p>
                        <p className={style.CardLocation}>Earth (Replacement Dimension)</p>
                    </div>

                    <div>
                        <p className={style.CardFirstSeenTitle}>First seen in:</p>
                        <p className={style.CardFirstSeen}>Earth (Replacement Dimension)</p>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
        
    </div>
  )
}

export default Landing
