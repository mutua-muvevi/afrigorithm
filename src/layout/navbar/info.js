import Iconify from "src/components/iconify/iconify"

// export const menuItems = [
// 	{
// 		label: "Home",
// 		path: "/landing/home"
// 	},
// 	{
// 		label: "About",
// 		path: "/landing/about"
// 	},
// 	{
// 		label: "Services",
// 		path: "/landing/services"
// 	},
// 	{
// 		label: "Testimonials",
// 		path: "/landing/testimonials"
// 	},
// 	{
// 		label: "News",
// 		path: "/landing/news"
// 	},
// 	{
// 		label: "Contact",
// 		path: "/landing/contact"
// 	},
// ]

// export const drawerMenuItems = [
// 	{
// 		label: "Home",
// 		path: "/landing/home"
// 	},
// 	{
// 		label: "About",
// 		path: "/landing/about"
// 	},
// 	{
// 		label: "Services",
// 		path: "/landing/services"
// 	},
// 	{
// 		label: "Testimonials",
// 		path: "/landing/testimonials"
// 	},
// 	{
// 		label: "News",
// 		path: "/landing/news"
// 	},
// 	{
// 		label: "Contact",
// 		path: "/landing/contact"
// 	},
// ]

export const navConfig = [
	{
		title: "Home",
		icon: <Iconify icon="clarity:home-solid" />,
		path: "/landing/home"
	},
	{
		title: "About",
		icon: <Iconify icon="mdi:about"/>,
		path: "/landing/about",
		children: [
			{
				subheader: "",
				items: [
					{
						title: "About Company",
						path: "/landing/about"
					},
					{
						title: "FAQ",
						path: "/landing/faq"
					},
					{
						title: "Testimonials",
						path: "/landing/testimonials"
					},
				]
			},
		]
	},
	{
		title: "Our Services",
		icon: <Iconify icon="bi:laptop-fill"/>,
		path: "/landing/services",
		children: [
			{
				subheader : "",
				items: [
					{
						title: "Our Services",
						path: "/landing/services"
					},
					{
						title: "Our Domain",
						path: "/landing/domain"
					},
				]
			},
		]
	},
	{
		title: "Our Products",
		icon: <Iconify icon="gg:website"/>,
		path: "/landing/products",
		children: [
			{
				subheader: "",
				items: [
					{
						title: "Our Products",
						path: "/landing/products"
					},
					{
						title: "Work in Progress",
						path: "/landing/wip"
					},
				]
			}
		]
	},
	{
		title: "Our Resources",
		icon: <Iconify icon="gg:website"/>,
		path: "/landing/research",
		children: [
			{
				subheader: "",
				items: [
					{
						title: "Research",
						path: "/landing/research"
					},
					{
						title: "News",
						path: "/landing/news"
					},
					{
						title: "Blogs",
						path: "/landing/blogs"
					},
				]
			},
		]
	},
	{
		title: "Contact",
		icon: <Iconify icon="material-symbols:contact-support"/>,
		path: "/landing/contact"
	},
]