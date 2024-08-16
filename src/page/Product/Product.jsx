import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ProductsCard from "./ProductsCard";

const Product = () => {

    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);
    const [count, setCount] = useState(0);
    const [filter, setFilter] = useState('');
    const [brand, setBrand] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [sort, setSort] = useState('');
    const [search, setSearch] = useState('');
    const [searchText, setSearchText] = useState('');
    const [products, setProducts] = useState([]);
    const [dateSort, setDateSort] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios(
                    `${import.meta.env.VITE_API_URL}/all-products?page=${currentPage}&size=${itemsPerPage}&filter=${filter}&brand=${brand}&priceRange=${priceRange}&sort=${sort}&search=${search}&dateSort=${dateSort}`
                );
                setProducts(data.products);
                setCount(data.count);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        getData();
    }, [currentPage, filter, brand, priceRange, itemsPerPage, search, sort, dateSort]);

    useEffect(() => {
        const getCount = async () => {
            const { data } = await axios(
                `${import.meta.env.VITE_API_URL}/products-count?filter=${filter}&brand=${brand}&priceRange=${priceRange}&search=${search}`
            );
            setCount(data.count);
        };
        getCount();
    }, [filter, brand, priceRange, search]);



    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1);


    // Pagination
    const handlePaginationButton = value => {
        setCurrentPage(value);
    };


    // Reset
    const handleReset = () => {
        setFilter('');
        setBrand('');
        setPriceRange('');
        setSort('');
        setSearch('');
        setSearchText('');
    };


    // Search 
    const handleSearch = e => {
        e.preventDefault();
        setSearch(searchText);
    };

    return (
        <div className=" bg-neutral-100  pb-10">
            <Helmet>
                <title>Products || PrimePick</title>
            </Helmet>

            <div className="container mx-auto lg:flex justify-between">
                <div className="lg:w-[21%] mt-16">
                    <div>
                        <div className='space-y-5'>

                            {/* Search by Text */}
                            <form onSubmit={handleSearch}>
                                <div className='flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                                    <input
                                        className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                        type='text'
                                        onChange={e => setSearchText(e.target.value)}
                                        value={searchText}
                                        name='search'
                                        placeholder='Search Products'
                                        aria-label='Search Products'
                                    />
                                    <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-red-500 focus:bg-gray-600 focus:outline-none'>
                                        Search
                                    </button>
                                </div>
                            </form>
                            {/* Filter By Brand */}
                            <div >
                                <select
                                    onChange={e => {
                                        setBrand(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    value={brand}
                                    name='brand'
                                    id='brand'
                                    className='border p-3 rounded-lg w-full'
                                >
                                    <option value=''>Filter By Brand</option>
                                    <option value='TechMaster'>TechMaster</option>
                                    <option value='SoundWave'>SoundWave</option>
                                    <option value='ProStand'>ProStand</option>
                                    <option value='HomeTech'>HomeTech</option>
                                </select>
                            </div>

                            {/* Filter By Category */}
                            <div>
                                <select
                                    onChange={e => {
                                        setFilter(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    value={filter}
                                    name='category'
                                    id='category'
                                    className='border p-3 w-full rounded-lg'
                                >
                                    <option value=''>Filter By Category</option>
                                    <option value='Electronics'>Electronics</option>
                                    <option value='Home Appliances'>Home Appliances</option>
                                    <option value='Kitchen'>Kitchen</option>
                                    <option value='Accessories'>Accessories</option>
                                    <option value='Personal Care'>Personal Care</option>
                                    <option value='Home Security'>Home Security</option>
                                </select>
                            </div>

                            {/* Filter By Price Range */}
                            <div>
                                <select
                                    onChange={e => {
                                        setPriceRange(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    value={priceRange}
                                    name='priceRange'
                                    id='priceRange'
                                    className='border p-3 w-full rounded-lg'
                                >
                                    <option value=''>Filter By Price Range</option>
                                    <option value='0-50'>$0 - $50</option>
                                    <option value='51-100'>$51 - $100</option>
                                    <option value='101-200'>$101 - $200</option>
                                    <option value='201-300'>$201 - $300</option>
                                    <option value='300+'>$300+</option>
                                </select>
                            </div>

                            {/* Sort By price */}
                            <div>
                                <label htmlFor="" className="font-bold">Sorting by Price</label>
                                <div className='flex items-center'>
                                    <input
                                        type='checkbox'
                                        id='sortAsc'
                                        checked={sort === 'asc'}
                                        onChange={() => {
                                            setSort(sort === 'asc' ? '' : 'asc');
                                            setCurrentPage(1);
                                        }}
                                        className='mr-2'
                                    />
                                    <label htmlFor='sortAsc' className='cursor-pointer'>
                                        Price Low to High
                                    </label>
                                </div>
                                <div className='flex items-center mt-2'>
                                    <input
                                        type='checkbox'
                                        id='sortDsc'
                                        checked={sort === 'dsc'}
                                        onChange={() => {
                                            setSort(sort === 'dsc' ? '' : 'dsc');
                                            setCurrentPage(1);
                                        }}
                                        className='mr-2'
                                    />
                                    <label htmlFor='sortDsc' className='cursor-pointer'>
                                        Price High to Low
                                    </label>
                                </div>
                                <div className="border-b border-2 mt-4"></div>

                                {/* Sort By Date */}
                                <div className="mt-5">
                                    <label htmlFor="dateSort" className="font-bold">Sorting by Date</label>
                                    <div className='flex items-center mt-2'>
                                        <input
                                            type='radio'
                                            id='sortDateAsc'
                                            name='dateSort'
                                            value='asc'
                                            checked={dateSort === 'asc'}
                                            onChange={() => {
                                                setDateSort('asc'); // Set sorting to ascending date
                                                setSort(''); // Clear price sort
                                                setCurrentPage(1);
                                            }}
                                            className='mr-2'
                                        />
                                        <label htmlFor='sortDateAsc' className='cursor-pointer'>
                                            Date Old to New
                                        </label>
                                    </div>
                                    <div className='flex items-center mt-2'>
                                        <input
                                            type='radio'
                                            id='sortDateDsc'
                                            name='dateSort'
                                            value='dsc'
                                            checked={dateSort === 'dsc'}
                                            onChange={() => {
                                                setDateSort('dsc'); // Set sorting to descending date
                                                setSort(''); // Clear price sort
                                                setCurrentPage(1);
                                            }}
                                            className='mr-2'
                                        />
                                        <label htmlFor='sortDateDsc' className='cursor-pointer'>
                                            Date New to Old
                                        </label>
                                    </div>
                                </div>

                            </div>


                            {/* Reset Button */}
                            <button onClick={handleReset} className='btn bg-gradient-to-r from-orange-400 to-rose-500 border-orange-500 text-white w-full text-lg'>
                                Reset
                            </button>
                        </div>
                    </div>
                </div>

                <div className='lg:w-[75%] my-6 md:my-10'>
                    <ProductsCard products={products} />
                </div>
            </div>

            {/* Pagination Section */}
            <div className='flex justify-center mt-12'>
                <button
                    disabled={currentPage === 1}
                    onClick={() => handlePaginationButton(currentPage - 1)}
                    className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500 hover:text-white'
                >
                    <div className='flex items-center -mx-1'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M7 16l-4-4m0 0l4-4m-4 4h18'
                            />
                        </svg>
                        <span className='mx-1'>Previous</span>
                    </div>
                </button>
                {pages.map(btnNum => (
                    <button
                        onClick={() => handlePaginationButton(btnNum)}
                        key={btnNum}
                        className={`hidden ${currentPage === btnNum ? 'bg-orange-500 text-white' : ''} px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500 hover:text-white`}
                    >
                        {btnNum}
                    </button>
                ))}
                <button
                    disabled={currentPage === numberOfPages}
                    onClick={() => handlePaginationButton(currentPage + 1)}
                    className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'
                >
                    <div className='flex items-center -mx-1'>
                        <span className='mx-1'>Next</span>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Product;
