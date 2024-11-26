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