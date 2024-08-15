

const Functionalities = () => {
    return (
        <div className="mt-4 space-y-5">

            {/* Searching */}
            <div>
                <label htmlFor="domain name" className="block text-sm text-gray-500 dark:text-gray-300">Domain Name</label>

                <div className="flex items-center mt-2">
                    <p className="py-2.5 px-3 text-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 border border-r-0 rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-l-lg">http://</p>
                    <input type="text" placeholder="merakiui.com" className="block w-full rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                </div>
            </div>

            {/* Categorization */}
            <div>
                <select className="select select-error w-full max-w-xs">
                    <option disabled selected>What is the best headless CMS</option>
                    <option>Strapi</option>
                    <option>Ghost</option>
                    <option>Netlify CMS</option>
                    <option>Sanity</option>
                </select>
            </div>

            {/* Sorting */}
            <div>

            </div>
        </div>
    );
};

export default Functionalities;