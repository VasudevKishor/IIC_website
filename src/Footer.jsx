import "./Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer-text">© {currentYear} IIC. Content.</p>
            <p className="footer-links">
                <a href="/privacy-policy" className="footer-link">Content</a> | 
                <a href="/terms-of-service" className="footer-link">Terms of Service</a>
            </p>
        </footer>
    );
}

export default Footer;
