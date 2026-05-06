const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-[#07090d] py-8 text-slate-500">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-sm md:flex-row md:items-center md:justify-between">
                <p>&copy; {new Date().getFullYear()} Abhay Bansal.</p>
                <p>Software developer focused on reliable full-stack systems.</p>
            </div>
        </footer>
    );
};

export default Footer;
