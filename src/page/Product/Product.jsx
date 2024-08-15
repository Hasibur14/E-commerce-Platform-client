import { useEffect, useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineStarRate } from "react-icons/md";



const Product = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])



    return (
        <div className="container mx-auto">

                  <div>

                  </div>
                  

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-6 md:my-10'>
                {
                    products.map(product => (
                        <div key={product._id} className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-white text-gray-800 border">
                            <div>
                                <div className="relative w-full ">
                                    <img
                                        className="object-cover w-full h-[250px] rounded"
                                        src={product.productImage}
                                        alt="Product Image"
                                    />

                                    <div className="absolute top-0 w-[70px] h-[70px] p-6 flex flex-col items-center justify-center  bg-gradient-to-tr  from-orange-500 to-[#921b42]  ">
                                        <p className="text-2xl text-white font-bold">Price</p>
                                        <p className="text-base text-white font-bold">
                                            ${product.price}
                                        </p>
                                    </div>
                                    {/* for right side border style */}
                                    <div
                                        className="absolute top-0 right-0 w-10 h-40 bg-gradient-to-tr from-orange-500 to-rose-800 opacity-95"
                                        style={{
                                            clipPath:
                                                "polygon(0 0, 100% 0, 100% 52%, 100% 100%, 48% 92%, 0 100%)",
                                        }}
                                    ></div>

                                    <h4 className="absolute top-16 font-semibold -right-[32px] text-lg text-white -rotate-90 ">
                                        Best Products
                                    </h4>
                                </div>
                                <div className="flex justify-between">
                                    <h2 className="mb-1 text-xl font-semibold hover:text-red-500">{product.productName}</h2>
                                    <h3 className="badge badge-info text-white mt-2 mr-4"> {product.category}</h3>
                                </div>

                                <p className="text-md text-gray-600">  {product.description}</p>
                            </div>
                            <div className="flex flex-wrap justify-between">
                                <div className="flex gap-1">
                                    <CiCalendarDate className="text-xl" />
                                    <span>{product.createdAt}</span>
                                </div>
                                <div className="flex gap-1 ">
                                    <MdOutlineStarRate className="text-xl text-red-500" />
                                    <span> {product.ratings}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;