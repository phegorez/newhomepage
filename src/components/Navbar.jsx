import Logo from '../assets/logo.svg'
import './Navbar.css'


const Navbar = ({isClick, setIsclick}) => {

    return (
        <header>
            <img src={Logo} className='logo' />

            <div className= {isClick ? 'menu-active' : 'menu'}>
                <span 
                    className="material-icons" 
                    id= {isClick ? 'menu-icon-close' : 'menu-icon-open'} 
                    onClick={() => {
                    setIsclick((prev) => !prev)
                }}>
                    {isClick ? 'clear' : 'menu'}
                </span>
                <ul className= {isClick ? 'menu-list-active' : 'menu-list'}>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">New</a>
                    </li>
                    <li>
                        <a href="">Poular</a>
                    </li>
                    <li>
                        <a href="">Trending</a>
                    </li>
                    <li>
                        <a href="">Categories</a>
                    </li>
                </ul>
            </div>


        </header>
    )
}

export default Navbar