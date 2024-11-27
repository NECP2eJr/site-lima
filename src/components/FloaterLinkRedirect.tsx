import { Link } from "react-router-dom"
import WhatsAppLogo from "../assets/whatsapp.svg"

const FloaterLinkRedirect = (): JSX.Element => {
    return (
        <Link
            target="_blank"
            className="fixed bottom-8 right-8 bg-green-500 text-white rounded-full w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center text-3xl shadow-md hover:bg-green-600 focus:outline-none"
            to={"https://wa.me/+553537144220?text=Olá%20César,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20de%20construção%20civil%20que%20vocês%20oferecem"}
        >
            <span className="sr-only">WhatsApp</span>
            <img src={WhatsAppLogo} alt="WhatsApp"></img>
        </Link>
    )
}

export default FloaterLinkRedirect;