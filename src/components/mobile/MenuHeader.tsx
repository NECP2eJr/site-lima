import { NavMenuOption } from "@/lib/utils"
import { NavMenuModel } from "@/models/optionsMenuModel"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import Logo from "../../assets/logo-BoRp8Sfr.svg";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";

interface MenuHeaderMobileProps {
    menuAction: () => void;
}

const MenuHeaderMobile = ({ menuAction, isMenuOpen }: any) => {
    return (
        <div className="fixed py-4 z-50 inset-y-0 right-0 w-full px-8 py-4 lg:top-0 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300">
            <div className="w-[100%]">
                <div className="flex justify-between items-center">
                    <div>
                        <Link title="Lima homepage" to={window.location.origin}>
                            <img className="w-16 flex items-center gap-2 shrink-0" src={Logo} alt="Lima homepage" />
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
                            <button className="text-left" key={index} onClick={item.action}>{item.label}</button>
                        )
                    })}
                </div>
                <div className="h-[1px] my-8 bg-slate-200 w-[100%]"></div>
                <div>
                    <Button className="py-6 bg-custom-purple w-[100%] hover:bg-custom-purple">
                        Entre em contato
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default MenuHeaderMobile;