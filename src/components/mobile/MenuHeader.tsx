import { btnContact, NavMenuOption } from "@/lib/utils"
import { NavMenuModel } from "@/models/optionsMenuModel"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import Logo from "../../assets/logo-BoRp8Sfr.svg";
import { useEffect, useState } from "react";
import { AlignJustify, X } from "lucide-react";



const MenuHeaderMobile = ({ menuAction, isMenuOpen }: any): JSX.Element => {
    const [menuClass, setMenuClass] = useState<string>("translate-x-full");

    useEffect(() => {
        if (isMenuOpen) {
            setMenuClass("translate-x-0");
        } else {
            setTimeout(() => setMenuClass("translate-x-full"), 300);
        }
    }, [isMenuOpen]);

    const goToid = (url: string) => {
        const targetElement = document.querySelector("#" + url);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        };

        menuAction();
    }

    return (
        <div className={`fixed z-50 pt-4 inset-y-0 right-0 w-full px-8 lg:top-0 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform transition-transform duration-300 ease-in-out ${menuClass}`}>
            <div className="w-[100%]">
                <div className="flex justify-between items-center">
                    <div>
                        <Link title="Lima homepage" to={window.location.origin}>
                            <img
                                className="w-16 flex items-center gap-2 shrink-0"
                                src={Logo}
                                alt="Lima homepage"
                            />
                        </Link>
                    </div>
                    <div className="block">
                        <button onClick={menuAction}>
                            {!isMenuOpen ? <AlignJustify /> : <X />}
                        </button>
                    </div>
                </div>
                <div className="flex pt-8 flex-col w-[100%] gap-y-4 items-start">
                    {NavMenuOption.map((item: NavMenuModel, index: number) => {
                        return (
                            <Link
                                className="link link-hover"
                                title={item.label}
                                key={index}
                                onClick={() => goToid(item.url)}
                                to={""}
                            >
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
                <div className="h-[1px] my-8 bg-slate-200 w-[100%]"></div>
                <div>
                    <Button
                        onClick={btnContact}
                        className="py-6 bg-custom-purple w-[100%] hover:bg-custom-purple"
                    >
                        Entre em contato
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default MenuHeaderMobile;