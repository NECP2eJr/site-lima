import { Address, CNPJ } from "@/lib/utils";
import { Mail, MapPin, PhoneIncoming } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-lima-completa-B4bT9kON.svg";

const Footer = (): JSX.Element => {

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
                            <Link
                                title="Envie um email"
                                target="_blank"
                                to={"mailto:engenharia@limaprestadora.com.br"}>
                                <Mail />
                            </Link>
                        </p>
                        <p className="text-sm text-colortext">
                            <Link
                                title="Ligue para nós"
                                target="_blank"
                                to={"tel:35991469635"}>
                                <PhoneIncoming />
                            </Link>
                        </p>
                        <p className="text-sm text-colortext">
                            <Link
                                title="Como chegar"
                                target="_blank"
                                to={"https://www.google.com/maps?s=web&sca_esv=a0e199fc98d1a06b&lqi=ChxsaW1hIHByZXN0YWRvcmEgZGUgc2VydmnDp29zSLrgs9vwgICACFoyEAAQARACEAMYABgBGAIYAyIcbGltYSBwcmVzdGFkb3JhIGRlIHNlcnZpw6dvczICcHSSARJnZW5lcmFsX2NvbnRyYWN0b3KqAUUQATIfEAEiG0rCoCiEl7r6_tu_NDfq8J6ikNX-jjDvwzC4_DIgEAIiHGxpbWEgcHJlc3RhZG9yYSBkZSBzZXJ2acOnb3M&vet=12ahUKEwjZmfig64GGAxWZppUCHdhEDgAQ1YkKegQIHRAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KUd8ISLq3MmUMSaMLU7uStye&daddr=Av.+Jo%C3%A3o+Pinheiro,+1317+-+Centro,+Po%C3%A7os+de+Caldas+-+MG,+37701-387"}>
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