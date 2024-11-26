import { Address, CNPJ } from "@/lib/utils";
import { Mail, MapPin, PhoneIncoming } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-lima-completa-B4bT9kON.svg";

const Footer = () => {

    function getYear() {
        const date = new Date();
        return date.getFullYear();
    }
    
    return (
        <footer className="bg-base border-t border-base-content/10">
            <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col items-center">
                <div className="flex flex-col space-y-5 items-center md:flex-row justify-between w-full">
                    <section className="w-full md:w-1/3 flex flex-col items-center text-balance text-center justify-center space-y-5">
                        <p className="text-sm text-base-content">Lima Prestadora de Serviços Ltda</p>
                        <p className="text-sm text-base-content">CNPJ: {CNPJ}</p>
                        <p className="text-sm text-base-content">{Address}</p>
                    </section>
                    <section className="w-full md:w-1/3 flex flex-col items-center text-balance text-center justify-center space-y-5">
                        <div>
                            <Link className="flex gap-2 justify-center md:justify-start items-center" to={window.location.origin}>
                                <img src={Logo} className="w-32 h-32" alt="Logotipo Lima" />
                            </Link>
                        </div>
                        <div>
                            <p className="mt-3 text-sm text-base-content/80 opacity-80">Tornando seu sonho em realidade</p>
                            <p className="hidden md:block mt-3 text-sm text-colortext">Copyright © {getYear()} - Todos os direitos reservados</p>
                        </div>
                    </section>
                    <section className="w-1/3 flex flex-row justify-center items-center space-x-5">
                        <p className="text-sm text-colortext">
                            <Link to={window.location.origin}>
                                <Mail />
                            </Link>
                        </p>
                        <p className="text-sm text-colortext">
                            <Link to={window.location.origin}>
                                <PhoneIncoming />
                            </Link>
                        </p>
                        <p className="text-sm text-colortext">
                            <Link to={window.location.origin}>
                                <MapPin />
                            </Link>
                        </p>
                    </section>
                    <section className="sm:flex md:hidden">
                        <p className="mt-3 text-sm text-center text-colortext">Copyright © {getYear()} - Todos os direitos reservados</p>
                    </section>
                </div>
            </div>
        </footer>
    )
}

export default Footer;