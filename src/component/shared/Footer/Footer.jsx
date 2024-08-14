
const Footer = () => {
    return (
        <>
            <footer className="bg-black mt-10">
                <div className="  footer p-8 text-white">
                    <aside className="lg:space-y-3 ml-10 md:ml-10 lg:ml-44 ">
                        <div className="flex">
                            <img className="w-56 " src="" alt="" />
                        </div>
                        <p className="text-md opacity-75 lg:w-[550px]">Dramatically target adaptive collaboration and idea-sharing vis-a-vis orthogonal technologies. Holisticly.</p>

                    </aside>

                    <div className="flex ml-12 space-x-10 lg:space-x-24">
                        <nav>
                            <header className="footer-title font-bold">Company</header>
                            <a className="link link-hover">About us</a><br />
                            <a className="link link-hover">Leadership</a><br />
                            <a className="link link-hover">Careers</a><br />
                            <a className="link link-hover">News & Article</a><br />
                            <a className="link link-hover">Doctors action</a><br />
                        </nav>
                        <nav className="lg:ml-20">
                            <header className="footer-title  font-bold ">Support</header>
                            <a className="link link-hover">Help Center</a><br />
                            <a className="link link-hover">FAQ</a><br />
                            <a className="link link-hover">Ticket Support</a><br />
                            <a className="link link-hover">Contact Us</a>
                        </nav>
                        <nav className="lg:ml-20">
                            <header className="footer-title font-bold ">FOLLOW US</header>
                            <a className="link link-hover">Facebook</a><br />
                            <a className="link link-hover">LinkedIn</a>
                        </nav>
                    </div>

                </div>
                <div className='container mx-auto'>
                    <hr />
                </div>
                <div className="footer justify-between container mx-auto p-4 flex text-white">
                    <p className='text-white'>Copyright © 2024 - All right reserved by </p>
                    <div className='flex space-x-2 text-xl'>
                        {/* <span> <FaFacebook /></span>
                        <span><FaLinkedin /></span>
                        <span><FaTwitterSquare /></span> */}
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;