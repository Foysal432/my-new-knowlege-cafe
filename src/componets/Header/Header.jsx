
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between p-4 mx-6 items-center border-b-2'>
            <h1>Knowledge Cafe</h1>
            <img src={profile} alt=""/>
        </header>
    );
};

export default Header;
