import { Link } from "react-router-dom"
import Background from "../assets/fundo-lima-uKFxrwah.png"
import { Button } from "./ui/button"
import { btnContact } from "@/lib/utils"

const Hero = (): JSX.Element => {
    
    return (
        <section className="relative hero overflow-hidden min-h-screen pt-16 md:pt-12">
            <img
                src={Background}
                alt="Background"
                className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute bg-[rgba(43,52,64,0.5)] inset-0 w-[100%] flex items-center justify-center text-center text-neutral-content p-8">
                <div className="z-40 m-auto w-[100%] flex flex-col items-center max-w-xl p-8 md:p-0">
                    <h2 className="z-40 text-white font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
                        Realize seu sonho, construa sua casa
                    </h2>
                    <p className="z-40 text-white opacity-80 text-lg opacity-80 mb-12 md:mb-16">
                        Realizando sonhos de milhares de famílias terem a casa própria.
                    </p>
                    <Button onClick={btnContact} className="py-6 px-16 z-0 bg-custom-purple hover:bg-purple-700">
                        Entre em contato
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Hero;
