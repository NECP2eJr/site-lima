import React from "react";
import LogoLimaPrestadora from "../assets/foto-antiga-lima-1XY_DbJv.jpg"
import LogoLimaPrestadora2 from "../assets/logo-lima-completa-B4bT9kON.svg"
import LogoLimaPrestadoraMobile from "../assets/logo-lima-completa-B4bT9kON.svg"

const About = (): JSX.Element => {
    return (
        <React.Fragment>
            <section id="sobre" className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-20 px-8 pt-20 pb-8 lg:pt-20">
                <div className="flex flex-col gap-5 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
                    <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight md:-mb-4">A nossa história</h1>
                    <p className="text-lg opacity-80 leading-relaxed text-justify">Há mais de quatro décadas, a Lima Prestadora de Serviços Ltda tem sido uma força vital no setor da construção civil. Desde nossa fundação em 1963 pelo visionário José Gabriel de Lima, nossa empresa tem sido uma referência de excelência, comprometimento e responsabilidade.</p>
                </div>
                <div className="lg:w-full flex flex-col items-center">
                    <img src={LogoLimaPrestadora} alt="Logo da Lima Prestadora de Servicos LTDA" className="w-full" />
                    <p className="text-sm opacity-70">Obra realizada em 2005</p>
                </div>
            </section>
            <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-20 px-8">
                <div className="hidden lg:block w-2/4 lg:w-full">
                    <img src={LogoLimaPrestadora2} alt="Logo da Lima Prestadora de Servicos LTDA" className="w-full" />
                </div>
                <div className="flex flex-col gap-5 lg:gap-14 items-center justify-center text-center lg:items-end">
                    <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight md:-mb-4">A nossa missão</h1>
                    <p className="text-lg opacity-80 leading-relaxed text-justify">Na Lima Prestadora de Serviços Ltda, nossa visão é sermos reconhecidos como parceiros confiáveis e líderes no setor da construção civil. Nosso objetivo é fornecer soluções inovadoras e de alta qualidade que impulsionem o sucesso e a satisfação de nossos clientes em cada projeto.</p>
                </div>
                <div className="block lg:hidden w-2/4">
                    <img src={LogoLimaPrestadoraMobile} alt="Logo da Lima Prestadora de Servicos LTDA" className="w-full" />
                </div>
            </section>
        </React.Fragment>
    )
}

export default About;