import style from './Footer.module.css'
import Github from '../../assets/github.png'
import Twitter from '../../assets/twitter.png'
import Linkedin from '../../assets/linkedin.png'

const Footer = () => {
  return (
    <div className={style.FooterMainContainer}>
        <div className={style.FooterText}>
            <p>Characters: 826</p>
            <p>Locations: 126</p>
            <p className={style.Status}>Server Status <p className={style.Circle}></p></p>
        </div>

        <div className={style.FooterSocialNetworkContainer}>
            <a href="https://github.com/DilinyerCR" target='_blank'>
                <img className={style.Github} src={Github} alt="" />
            </a>

            <a href="https://twitter.com/DilinyerCR" target='_blank'>
                <img className={style.Github} src={Twitter} alt="" />
            </a>

            <a href="https://www.linkedin.com/in/dilinyer-castillo/" target='_blank'>
                <img className={style.Github} src={Linkedin} alt="" />
            </a>

        </div>

        <p className={style.By}>❮❯ by <a className={style.MyName} href="https://github.com/DilinyerCR" target='_blanc'>Dilinyer Castillo</a> 2024</p>
    </div>
  )
}

export default Footer
