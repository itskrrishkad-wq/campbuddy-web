import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
    Images,
    Star,
    Tent,
    Users,
} from "lucide-react";
import { PACKAGES } from "../refactored-packages";

interface PackageCardProps {
    pkg: (typeof PACKAGES)[number];
}

export default function PackageCard({
    pkg,
}: PackageCardProps) {
    const folderName =
        pkg.imageFolder.split("/").pop() || "";

    // const coverImage = `${pkg.imageFolder}/${folderName}-1.webp`;

    const galleryImages = Array.from(
        {
            length: Math.min(
                Math.max(pkg.imageCount - 1, 0),
                3
            ),
        },
        (_, i) =>
            `${pkg.imageFolder}/${folderName}-${i + 1}.webp`
    );

    const pkg_images = Array.from(
        {
            length: Math.min(
                Math.max(pkg.imageCount - 1, 0),
                pkg.imageCount
            ),
        },
        (_, i) =>
            `${pkg.imageFolder}/${folderName}-${i + 1}.webp`
    );

    const lowestPrice =
        pkg.pricing?.length
            ? Math.min(...pkg.pricing.map((p) => p.price))
            : null;

    const originalPrice = pkg.pricing?.reduce<
        number | undefined
    >((acc, item) => {
        if (
            "originalPrice" in item &&
            item.originalPrice
        ) {
            return item.originalPrice;
        }

        return acc;
    }, undefined);

    console.log({ pkg_images })

    return (
        <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            {/* Hero Image */}
            <div className="relative h-72 overflow-hidden">
                <Carousel
                    className="w-full h-72"
                    opts={{ align: "start", loop: true }}
                >
                    <CarouselContent className="h-full">
                        {pkg_images.map((image, imageIndex) => (
                            <CarouselItem key={imageIndex} className="h-full">
                                <div className="relative w-full h-full">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={image}
                                        loading="lazy"
                                        alt={`${image} - Image ${imageIndex + 1}`}
                                        className="w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Carousel Navigation */}
                    <CarouselPrevious
                        className="absolute left-2 inset-y-0 z-20 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-300 w-8 h-8"
                    // onClick={(e) => {
                    //     e.preventDefault();
                    //     e.stopPropagation();
                    // }}
                    />

                    <CarouselNext
                        className="absolute right-2 inset-y-0 z-20 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-300 w-8 h-8"
                    // onClick={(e) => {
                    //     e.preventDefault();
                    //     e.stopPropagation();
                    // }}
                    />

                    {/* Dot Indicators */}
                    {/* <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex space-x-1">
                        {pkg_images.map((_, dotIndex) => (
                            <div
                                key={dotIndex}
                                className="w-2 h-2 rounded-full bg-white/60 backdrop-blur-sm"
                            />
                        ))}
                    </div> */}
                </Carousel>

                {/* Main Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Tags */}
                <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
                    {pkg.tags.slice(0, 2).map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800 backdrop-blur"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <div className="absolute bottom-5 left-5 z-10 text-white">
                    <p className="mb-1 text-xs uppercase tracking-[0.2em] text-white/80">
                        {pkg.destination}
                    </p>

                    <h3 className="max-w-xs text-2xl font-bold leading-tight">
                        {pkg.name}
                    </h3>
                </div>
            </div>

            {/* Gallery Preview */}
            {galleryImages.length > 0 && (
                <div className="flex gap-2 px-4 pt-4">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="h-16 flex-1 overflow-hidden rounded-xl"
                        >
                            <img
                                src={image}
                                loading="lazy"
                                alt={`${pkg.name}-${index + 2}`}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    ))}

                    {pkg.imageCount > 4 && (
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-neutral-900 text-sm font-semibold text-white">
                            +{pkg.imageCount - 4}
                        </div>
                    )}
                </div>
            )}

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
                {/* Top Content */}
                <div className="space-y-5">
                    {/* Rating */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Star
                                size={16}
                                className="fill-yellow-400 text-yellow-400"
                            />

                            <span className="font-semibold">
                                {pkg.rating}
                            </span>

                            <span className="text-sm text-neutral-500">
                                ({pkg.reviewsCount} reviews)
                            </span>
                        </div>

                        <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium capitalize">
                            {pkg.category}
                        </span>
                    </div>

                    {/* Accommodation */}
                    {(pkg.accommodation ||
                        pkg.occupancy) && (
                            <div className="rounded-2xl bg-neutral-50 p-4">
                                {pkg.accommodation && (
                                    <div className="mb-2 flex items-center gap-2">
                                        <Tent
                                            size={16}
                                            className="text-neutral-600"
                                        />

                                        <span className="text-sm">
                                            {pkg.accommodation}
                                        </span>
                                    </div>
                                )}

                                {pkg.occupancy && (
                                    <div className="flex items-center gap-2">
                                        <Users
                                            size={16}
                                            className="text-neutral-600"
                                        />

                                        <span className="text-sm">
                                            {pkg.occupancy}
                                        </span>
                                    </div>
                                )}
                            </div>
                        )}

                    {/* Meals */}
                    {pkg.amenities &&
                        pkg.amenities?.length > 0 && (
                            <div>
                                <h4 className="mb-2 text-sm font-semibold">
                                    Amenities Included
                                </h4>

                                <div className="flex flex-wrap gap-1.5">
                                    {pkg.amenities
                                        // .slice(0, 4)
                                        .map((amenitie) => (
                                            <span
                                                key={amenitie}
                                                className="rounded-lg border border-neutral-200 px-2 py-1 text-xs"
                                            >
                                                {amenitie}
                                            </span>
                                        ))}
                                </div>
                            </div>
                        )}

                    {/* Meals */}
                    {pkg.meals &&
                        pkg.meals?.length > 0 && (
                            <div>
                                <h4 className="mb-2 text-sm font-semibold">
                                    Meals Included
                                </h4>

                                <div className="flex flex-wrap gap-2">
                                    {pkg.meals
                                        .map((meal) => (
                                            <span
                                                key={meal}
                                                className="rounded-lg border border-neutral-200 px-2 py-1 text-xs"
                                            >
                                                {meal}
                                            </span>
                                        ))}
                                </div>
                            </div>
                        )}

                    {/* Activities */}
                    {pkg.activities &&
                        pkg.activities?.length > 0 && (
                            <div>
                                <h4 className="mb-2 text-sm font-semibold">
                                    Activities
                                </h4>

                                <div className="flex flex-wrap gap-2">
                                    {pkg.activities
                                        .map((activity) => (
                                            <span
                                                key={activity}
                                                className="rounded-lg bg-blue-50 px-2 py-1 text-xs text-blue-700"
                                            >
                                                {activity}
                                            </span>
                                        ))}
                                </div>
                            </div>
                        )}

                    {/* Variants */}
                    {pkg.variants &&
                        pkg.variants?.length > 0 && (
                            <div>
                                <h4 className="mb-2 text-sm font-semibold">
                                    Available Options
                                </h4>

                                <div className="flex flex-wrap gap-2">
                                    {pkg.variants.map(
                                        (variant) => (
                                            <span
                                                key={variant.name}
                                                className="rounded-full border border-neutral-200 px-3 py-1 text-xs"
                                            >
                                                {variant.name}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        )}
                </div>

                {/* Bottom Section */}
                <div className="mt-auto pt-6">
                    {pkg.pricing &&
                        pkg.pricing?.length > 0 && (
                            <div className="border-t pt-4">
                                <div className="mb-4 flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-neutral-500">
                                            Starting From
                                        </p>

                                        {lowestPrice && (
                                            <div className="flex items-center gap-2">
                                                <span className="text-3xl font-bold text-green-600">
                                                    ₹
                                                    {lowestPrice.toLocaleString()}
                                                </span>

                                                {originalPrice && (
                                                    <span className="text-sm text-neutral-400 line-through">
                                                        ₹
                                                        {originalPrice.toLocaleString()}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-1 text-xs text-neutral-500">
                                        <Images size={14} />
                                        {pkg.imageCount} Photos
                                    </div>
                                </div>

                                <div className="mb-4 space-y-2">
                                    {pkg.pricing
                                        .slice(0, 4)
                                        .map((price, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between rounded-xl bg-neutral-50 px-3 py-2"
                                            >
                                                <div>
                                                    <p className="text-sm font-medium">
                                                        {price.label}
                                                    </p>

                                                    {"guests" in price &&
                                                        price.guests && (
                                                            <p className="text-xs text-neutral-500">
                                                                {price.guests} Guests
                                                            </p>
                                                        )}
                                                </div>

                                                <div className="font-semibold text-green-600">
                                                    ₹
                                                    {price.price.toLocaleString()}
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}

                    <button
                        id={`package-book-btn-${pkg.id}`}
                        className="w-full bg-orange-600 hover:bg-orange-700 active:bg-orange-850 text-white font-sans font-bold text-sm py-3.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm hover:shadow"
                    >
                        <span>Instant Booking Inquiry</span>
                    </button>
                </div>
            </div>
        </div>
    );
}