import Image from '../Images/shared.png';

const Share = () => {
    return ( 
        <div className='font-pop flex flex-col justify-center items-center mx-auto'>
            <h2 className='font-semi-bold text-center text-xl mb-6'>Sharing Is The Best Gift<br />You Can Give</h2>
            <p className='m-4 text-center text-l'>Sharing these holidays is the best gift you can give, give a present or share your love with the people you love the most and celebrate with great happiness.</p>
            <button className='bg-red-500 hover:bg-red-700 text-white font-semi-bold py-3 px-4 rounded mx-auto'>Get Started</button>
            <img src={Image} alt='home' className='w-72 mx-auto'/>  
        </div>

    );
}
    
export default Share;