import { NavMenuModel } from "@/models/optionsMenuModel"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const NavMenuOption: NavMenuModel[] = [
  {
    url: "#sobre",
    action: "",
    label: "Sobre a empresa"
  },
  {
    url: "#servicos",
    action: "",
    label: "Serviços"
  },
]

export const CNPJ: string = "04.675.505/00001-07";
export const Address: string = "Av. João Pinheiro, 1317 - Centro, Poços de Caldas - MG, 37701-387";