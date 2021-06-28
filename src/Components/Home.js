import Imageone from '../Images/home.png';

const Home = () => {
    return ( 
        <div className='font-pop mx-auto'>
            <img src={Imageone} alt='home' className='w-72 mx-auto'/>          
            <h2 className='font-bold text-3xl pl-4'>Send A Gift For Christmas</h2>
            <p className='font-regular text-base pl-4 pt-4'>In these end of the year holidays send a gift to your loved one and share the happiness at Christmas.</p>
            <button className='bg-red-500 hover:bg-red-700 text-white font-semi-bold py-3 px-4 rounded ml-4 mt-8'>Get Started</button>
        </div>
    );
}
 
export default Home;