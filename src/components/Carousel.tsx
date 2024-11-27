import { CarouselItems } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { carouselItemModel } from "@/models/carouselServicesModel";

const CarouselServices = () => {
    return (
        <section id="servicos" className="py-20 flex flex-col items-center gap-5">
            <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tight">Nossos serviços</h1>
            <Carousel className="w-[100%] m-auto">
                <CarouselContent className="w-[100%] m-auto ">
                    {CarouselItems.map((item: carouselItemModel, index: number) => {
                        return (
                            <CarouselItem key={index} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
                                <div id={"item" + index} className="carousel-item w-full pb-16 justify-center">
                                    <div className="card w-96 bg-base-100 shadow-2xl ml-5 rounded-b-xl">
                                        <figure>    
                                            <img className="rounded-t-xl object-cover relative inset-0" src={item.image} alt={ item.label} />
                                        </figure>
                                        <div className="p-8">
                                            <h2 className="text-xl text-bold h-16">{item.label}</h2>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <div className="flex m-auto justify-center gap-0 items-center flex-row align-middle">
                    <CarouselPrevious className="relative bottom-0 m-auto flex left-00" />
                    <CarouselNext className="relative bottom-0 m-auto flex left-0" />
                </div>
            </Carousel>
        </section>
    )
}

export default CarouselServices;