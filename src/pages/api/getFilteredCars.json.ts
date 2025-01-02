export const prerender = false;
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ request }) => {
	const url = new URL(request.url);

	const make = url.searchParams.get("make");
	const model = url.searchParams.get("model");
	const yearFrom = url.searchParams.get("yearFrom");
	const yearTo = url.searchParams.get("yearTo");
	const priceFrom = url.searchParams.get("priceFrom");
	const priceTo = url.searchParams.get("priceTo");
	const mileageFrom = url.searchParams.get("mileageFrom");
	const mileageTo = url.searchParams.get("mileageTo");
	const fuelType = url.searchParams.get("fuelType");
	const bodyType = url.searchParams.get("bodyType");
	const transmission = url.searchParams.get("transmission");
	const color = url.searchParams.get("color");
	const condition = url.searchParams.get("condition");

	const filters: ((data: any) => boolean)[] = [];

	// Make
	if (make && make !== "all") {
		filters.push((data: any) => data.general.make === make);
	}

	// Model
	if (model && model !== "all") {
		if (make) {
			filters.push((data: any) => data.general.model === model);
		} else {
			return new Response(JSON.stringify({ error: "Please provide a make" }), {
				status: 400,
				headers: { "content-type": "application/json" },
			});
		}
	}

	// Year
	if (yearFrom) {
		filters.push((data: any) => data.history.year >= parseInt(yearFrom));
	}

	if (yearTo) {
		filters.push((data: any) => data.history.year <= parseInt(yearTo));
	}

	// Price
	if (priceFrom) {
		const minPrice = parseInt(priceFrom);
		filters.push((data: any) => {
			const regularPrice = data.general.price;
			const salePrice = data.general.salePrice;
			return regularPrice >= minPrice || (salePrice && salePrice >= minPrice);
		});
	}

	if (priceTo) {
		const maxPrice = parseInt(priceTo);
		filters.push((data: any) => {
			const regularPrice = data.general.price;
			const salePrice = data.general.salePrice;
			return regularPrice <= maxPrice || (salePrice && salePrice <= maxPrice);
		});
	}

	// Mileage
	if (mileageFrom) {
		filters.push((data: any) => data.history.mileage >= parseInt(mileageFrom));
	}

	if (mileageTo) {
		filters.push((data: any) => data.history.mileage <= parseInt(mileageTo));
	}

	// Fuel Type
	if (fuelType && fuelType !== "all") {
		filters.push((data: any) => data.technical.fuelType === fuelType);
	}

	// Body Type
	if (bodyType && bodyType !== "all") {
		filters.push((data: any) => data.general.bodyType === bodyType);
	}

	// Transmission
	if (transmission && transmission !== "all") {
		filters.push((data: any) => data.technical.transmission === transmission);
	}

	// Color
	if (color && color !== "all") {
		filters.push((data: any) => data.exterior.color === color);
	}

	// Condition
	if (condition && condition !== "all") {
		filters.push((data: any) => data.general.condition === condition);
	}

	const allCars = await getCollection("cars", ({ data }: { data: any }) => {
		return filters.every((filter) => filter(data));
	});

	if (!allCars || allCars.length === 0) {
		return new Response(JSON.stringify({ error: "No cars found" }), {
			status: 404,
			headers: { "content-type": "application/json" },
		});
	}

	return new Response(JSON.stringify(allCars), {
		status: 200,
		headers: { "content-type": "application/json" },
	});
};
