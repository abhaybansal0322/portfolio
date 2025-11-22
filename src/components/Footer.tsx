const Footer = () => {
    return (
        <footer className="bg-black text-gray-500 py-8 border-t border-white/10">
            <div className="container mx-auto px-6 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Abhay Bansal. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
