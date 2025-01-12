interface MainMenuItem {
	id: string;
	label: string;
	url?: string; // Optional for navigation
	submenu?: MainMenuItem[]; // Nested menus
	isExternal?: boolean; // Flag for external links
	icon?: string; // Optional icon (e.g., Heroicons)
}

export const menuMain: MainMenuItem[] = [
	{
		id: "home",
		label: "Home",
		url: "/",
	},
	{
		id: "cars",
		label: "Cars",
		url: "/cars",
	},
	{
		id: "about",
		label: "About",
		url: "/about-us",
		submenu: [{ id: "home", label: "Home", url: "/" }],
	},
	{
		id: "services",
		label: "Services",
		url: "/services",
	},
];

export const menuNavigation = {
	prettyName: "Navigation",
	items: [
		{
			name: "Home",
			url: "/",
		},
		{
			name: "Cars",
			url: "/cars",
		},
		{
			name: "About Us",
			url: "/about-us",
		},
		{
			name: "Services",
			url: "/services",
		},
		{
			name: "Blog",
			url: "/blog",
		},
	],
};

export const menuService = {
	prettyName: "Service",
	items: [
		{
			name: "Home",
			url: "/",
		},
		{
			name: "Cars",
			url: "/cars",
		},
		{
			name: "About Us",
			url: "/about-us",
		},
		{
			name: "Services",
			url: "/services",
		},
		{
			name: "Blog",
			url: "/blog",
		},
	],
};

export const menuMisc = {
	prettyName: "Miscellaneous",
	items: [
		{
			name: "Home",
			url: "/",
		},
		{
			name: "Cars",
			url: "/cars",
		},
		{
			name: "About Us",
			url: "/about-us",
		},
		{
			name: "Services",
			url: "/services",
		},
		{
			name: "Blog",
			url: "/blog",
		},
	],
};

export const menuLegal = {
	prettyName: "Legal",
	items: [
		{
			name: "Home",
			url: "/",
		},
		{
			name: "Cars",
			url: "/cars",
		},
		{
			name: "About Us",
			url: "/about-us",
		},
		{
			name: "Services",
			url: "/services",
		},
		{
			name: "Blog",
			url: "/blog",
		},
	],
};
