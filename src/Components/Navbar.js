import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className='flex justify-between items-center h-16 font-pop font-bold' role='navigation'>
            <Link to='/' className='pl-4'>
                Christmas Gift
            </Link>

            <div className='pr-8 md:block hidden'>
                <Link to='/' className='p-4'>
                    Home
                </Link>
                <Link to='/share' className='p-4'>
                    Share
                </Link>
                <Link to='/decorations' className='p-4'>
                    Decorations
                </Link>
                <Link to='/accessory' className='p-4'>
                    Accessory
                </Link>
            </div>

        </nav>

    );
}
 
export default Navbar;