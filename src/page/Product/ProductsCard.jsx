import PropTypes from 'prop-types';
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineStarRate } from "react-icons/md";

const ProductsCard = ({ products }) => {
    // Function to format date
    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {
                products.map(product => (
                    <div key={product._id} className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-white text-gray-800 border">
                        <div>
                            <div className="relative w-full">
                                <img
                                    className="object-cover w-full h-[250px] rounded"
                                    src={product.productImage}
                                    alt="Product Image"
                                />
                                <div className="absolute top-0 w-[70px] h-[70px] p-6 flex flex-col items-center justify-center bg-gradient-to-tr from-orange-400 to-rose-500">
                                    <p className="text-2xl text-white font-bold">Price</p>
                                    <p className="text-base text-white font-bold">
                                        ${product.price}
                                    </p>
                                </div>
                                {/* for right side border style */}
                                <div
                                    className="absolute top-0 right-0 w-10 h-40 bg-gradient-to-tr from-orange-400 to-rose-500 opacity-95"
                                    style={{
                                        clipPath:
                                            "polygon(0 0, 100% 0, 100% 52%, 100% 100%, 48% 92%, 0 100%)",
                                    }}
                                ></div>
                                <h4 className="absolute top-16 font-semibold -right-[32px] text-lg text-white -rotate-90">
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
                                <span>{formatDate(product.createdAt)}</span>
                            </div>
                            <div className="flex gap-1">
                                <MdOutlineStarRate className="text-xl text-red-500" />
                                <span> {product.ratings}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

ProductsCard.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            productImage: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            productName: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired,
            ratings: PropTypes.number.isRequired
        })
    ).isRequired
};

export default ProductsCard;
