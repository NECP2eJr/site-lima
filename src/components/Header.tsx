import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";  // Link do React Router
import { Button } from "./ui/button";
import { AlignJustify, X } from "lucide-react";
import Logo from "../assets/logo-BoRp8Sfr.svg";
import { btnContact, NavMenuOption } from "@/lib/utils";
import { NavMenuModel } from "@/models/optionsMenuModel";
import MenuHeaderMobile from "./mobile/MenuHeader";

const Header = (): JSX.Element => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const goToid = (url: string) => {
        const targetElement = document.querySelector("#" + url);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        
    }

    const renderNavMenu = () => {
        return NavMenuOption.map((item: NavMenuModel, index: number) => (
            <Link
                className="link link-hover"
                title={item.label}
                key={index}
                onClick={() => goToid(item.url)}
                to={""}
            >
                <span>{item.label}</span>
            </Link>
        ));
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="bg-base-200 fixed z-50 w-full bg-base">
                {/* Logo */}
                <nav className="container flex items-center justify-between px-8 py-4 mx-auto">
                    <div>
                        <Link title="Lima homepage" to={window.location.origin}>
                            <img className="w-16 flex items-center gap-2 shrink-0" src={Logo} alt="Lima homepage" />
                        </Link>
                    </div>

                    {/* Menu para desktop */}
                    <div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center">
                        {renderNavMenu()}
                    </div>

                    {/* Botão de contato para desktop */}
                    <div className="hidden lg:flex">
                        <Button onClick={btnContact} className="py-6 z-0 bg-custom-purple hover:bg-purple-700">
                            Entre em contato
                        </Button>
                    </div>

                    {/* Ícone de menu mobile */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu}>
                            {!isMenuOpen ? <AlignJustify /> : <X />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Menu Mobile */}
            {isMenuOpen && <MenuHeaderMobile menuAction={toggleMenu} isMenuOpen={isMenuOpen} />}
        </>
    );
};

export default Header;
