const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-8">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 Kno. All rights reserved.</p>
                <p>Contact us: <a href="mailto:info@kno.com" className="hover:underline">info@kno.com</a></p>
            </div>
        </footer>
    );
}

export default Footer;