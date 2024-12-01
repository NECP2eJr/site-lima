import { carouselItemModel } from "@/models/carouselServicesModel";
import { NavMenuModel } from "@/models/optionsMenuModel";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import CardOneOne from "../assets/card-one-one-BzInpK4c.jpg";
import CardOneTwo from "../assets/card-one-two-2KpbKpJt.jpg";
import CardOneThree from "../assets/card-one-three-DxkxndH-.jpg";
import CardTwoOne from "../assets/card-two-one-B9yE3St7.jpg";
import CardTwoTwo from "../assets/card-two-two-2o2aBJpU.jpg";
import CardTwoThree from "../assets/card-two-three-CIAYvc4j.jpg";
import CardThreeOne from "../assets/card-three-one-ApbQ_G_f.jpg";
import CardThreeTwo from "../assets/card-three-two-BDj2JHgc.jpg";
import CardThreeThree from "../assets/card-three-three-cUJ1vG-i.jpg";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
};

export const NavMenuOption: NavMenuModel[] = [
  {
    url: "sobre",
    action: "",
    label: "Sobre a empresa"
  },
  {
    url: "servicos",
    action: "",
    label: "Serviços"
  },
]

export const CarouselItems: carouselItemModel[] = [
  {
    label: "Construção de edifícios residenciais",
    image: CardOneOne
  },
  {
    label: "Construção de edifícios industriais",
    image: CardOneTwo
  },
  {
    label: "Reabilitação e manutenção de estruturas existentes",
    image: CardOneThree
  },
  {
    label: "Serviço de elétrica",
    image: CardTwoOne
  },
  {
    label: "Serviço de hidráulica",
    image: CardTwoTwo
  },
  {
    label: "Serviços de instalação de elementos arquitetônicos",
    image: CardTwoThree
  },
  {
    label: "Pintura residencial",
    image: CardThreeOne
  },
  {
    label: "Pintura predial",
    image: CardThreeTwo
  },
  {
    label: "Perícia técnica nas áreas de segurança do trabalho",
    image: CardThreeThree
  },

]

export const CNPJ: string = "04.675.505/00001-07";

export const btnContact = () => {
  return window.open("https://wa.me/+553537144220?text=Olá%20César,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20de%20construção%20civil%20que%20vocês%20oferecem");
};