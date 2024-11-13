import React from 'react';


export const FooterComponent = () => {
    return (
        <footer className="footer bg-dark text-white py-3">
            <div className="container text-center">
                <span>&copy; {new Date().getFullYear()} Sistema Web - Todos los derechos reservados</span>
                <div className="mt-2">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
