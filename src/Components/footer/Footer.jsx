import './Footer.scss';
import Logo from './assets/logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="container row">
                <div className='column'>
                    <h2>
                        Желаете сотрудничать с нами?
                    </h2>
                    <p>
                        Перестаньте сомневаться и зарабатывайте уже сейчас!
                    </p>
                    <div className="row">
                        <a href="mailto:info@brainway.co.il">
                            info@brainway.co.il
                        </a>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path d="M24.0754 0H1.91953C0.858203 0 0 0.837891 0 1.87383V24.1211C0 25.157 0.858203 26 1.91953 26H24.0754C25.1367 26 26 25.157 26 24.1262V1.87383C26 0.837891 25.1367 0 24.0754 0ZM7.71367 22.1559H3.8543V9.74492H7.71367V22.1559ZM5.78398 8.05391C4.54492 8.05391 3.54453 7.05352 3.54453 5.81953C3.54453 4.58555 4.54492 3.58516 5.78398 3.58516C7.01797 3.58516 8.01836 4.58555 8.01836 5.81953C8.01836 7.04844 7.01797 8.05391 5.78398 8.05391ZM22.1559 22.1559H18.3016V16.123C18.3016 14.6859 18.2762 12.8324 16.2957 12.8324C14.2898 12.8324 13.9852 14.4016 13.9852 16.0215V22.1559H10.1359V9.74492H13.8328V11.441H13.8836C14.3965 10.466 15.6559 9.43516 17.5297 9.43516C21.4348 9.43516 22.1559 12.0047 22.1559 15.3461V22.1559Z" fill="#333333" />
                            </svg>
                        </a>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path d="M23.2143 0H2.78571C2.0469 0 1.33834 0.293494 0.815917 0.815917C0.293494 1.33834 0 2.0469 0 2.78571L0 23.2143C0 23.9531 0.293494 24.6617 0.815917 25.1841C1.33834 25.7065 2.0469 26 2.78571 26H10.7511V17.1606H7.09487V13H10.7511V9.82893C10.7511 6.22201 12.8984 4.22964 16.1873 4.22964C17.7624 4.22964 19.4095 4.51054 19.4095 4.51054V8.05071H17.5947C15.8066 8.05071 15.2489 9.16036 15.2489 10.2984V13H19.2406L18.6022 17.1606H15.2489V26H23.2143C23.9531 26 24.6617 25.7065 25.1841 25.1841C25.7065 24.6617 26 23.9531 26 23.2143V2.78571C26 2.0469 25.7065 1.33834 25.1841 0.815917C24.6617 0.293494 23.9531 0 23.2143 0Z" fill="#333333" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <Link to='/'>
                        <img src={Logo} alt="logo" />
                    </Link>
                    <Link to='/about'>
                        О компании
                    </Link>
                    <Link to='/consultation'>
                        Наши услуги
                    </Link>
                    <Link to='/news'>
                        Новости
                    </Link>
                    <Link to='/Contacts'>
                        Контакты
                    </Link>
                    <p>
                        © 2018 — {new Date().getFullYear()} Brainway LTD
                    </p>
                </div>
            </div>
        </footer>
    )
}