import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/banner1.png';

const Home = () => {
    return (
        <div className='container mx-auto mt-20'>
            <Helmet>
                <title>Home || PrimePick</title>
            </Helmet>
            <div className="">
                <div className="w-full bg-center bg-cover h-[38rem] rounded-xl" style={{ backgroundImage: `url(${bannerImg})` }}>
                    <div className="flex items-center justify-center rounded-xl w-full h-full bg-gray-900/40">
                        <div className="text-center">
                            <h1 className="text-2xl font-bold text-white lg:text-5xl">Discover the Best Deals on <br /> Your Favorite Products</h1>
                            <Link to='/product' className="btn w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-orange-400 to-rose-500 border-orange-500 rounded-md lg:w-auto hover:bg-orange-500 focus:outline-none">Visit Products</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
