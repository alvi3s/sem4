const Footer = () => {
    return (
        <footer className="mt-3">
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
                crossOrigin="anonymous"
            ></script>

            <div className="p-3 mb-2 bg-black text-white">
                <div className="container text-center">
                    <div className="row">
                        <div className="col order-last">
                            POLÍTICAS DE PRIVACIDAD
                        </div>
                        <div className="col">
                            TÉRMINOS Y CONDICIONES
                        </div>
                        <div className="col order-first">
                            LIBRO DE RECLAMACIONES
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
