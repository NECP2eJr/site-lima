import { CarouselItems } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { carouselItemModel } from "@/models/carouselServicesModel";

const CarouselServices = (): JSX.Element => {
    return (
        <section id="servicos" className="py-20 flex flex-col items-center gap-5">
            <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tight">Nossos serviços</h1>
            <Carousel className="w-full m-auto">
                <CarouselContent className="w-full m-auto">
                    {CarouselItems.map((item: carouselItemModel, index: number) => {
                        return (
                            <CarouselItem key={index} className="w-full sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
                                <div id={"item" + index} className="w-full pb-16 justify-center">
                                    <div className="w-full max-w-sm bg-white shadow-2xl mx-auto rounded-b-xl">
                                        <figure>
                                            <img className="rounded-t-xl object-cover relative inset-0" src={item.image} alt={item.label} />
                                        </figure>
                                        <div className="p-8">
                                            <h2 className="text-xl font-bold h-16">{item.label}</h2>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <div className="flex m-auto justify-center gap-4 items-center flex-row align-middle">
                    <CarouselPrevious className="relative bottom-0 m-auto flex left-0" />
                    <CarouselNext className="relative bottom-0 m-auto flex left-0" />
                </div>
            </Carousel>
        </section>
    )
}

export default CarouselServices;
