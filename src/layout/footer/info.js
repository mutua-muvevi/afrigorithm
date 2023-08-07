import { BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";


const styledIcons = {

}

export const footerItems = {
	logoSection : {
		logo: {
			src: "https://res.cloudinary.com/dbj0t0zym/image/upload/v1687960483/logos/logowhite_qirfnd.png",
			alt:"Afrigorithm logo"
		},
		title: "Afrigorithm Ltd",
		text: "Experience technology crafted with precision, passion, and your business in mind. Propel forward with us, where innovation meets ambition, and visions become reality."
	},
	pages: {
		title: "Company",
		items: [
			{
				label: "Home",
				link: "/landing/home"
			},
			{
				label: "About us",
				link: "/landing/about"
			},
			{
				label: "Services",
				link: "/landing/services"
			},
			{
				label: "News",
				link: "/landing/news"
			},
			{
				label: "Contact",
				link: "/landing/contact"
			},
		]
	},
	support: {
		title: "Support",
		items: [
			{
				label: "Job Openings",
				link: "/landing/careers"
			},
			{
				label: "Privacy Policy",
				link: "/landing/privacy"
			},
			{
				label: "Terms of Service",
				link: "/landing/terms"
			},
			{
				label: "Cookie Policy",
				link: "/landing/cookie"
			},
			{
				label: "Refunds Policy",
				link: "/landing/refunds"
			},
		]
	},
	getInTouch: {
		title: "Get in touch",
		items: [
			{
				label: "info@afrigorithm.com",
				icon: <BsFillEnvelopeFill style={styledIcons}/>
			},
			{
				label: "afrigorithm@gmail.com",
				icon: <BsFillEnvelopeFill style={styledIcons}/>
			},
			{
				label: "+254 796 788 681",
				icon: <BsFillTelephoneFill style={styledIcons}/>
			},
			{
				label: "+254 799 756 331",
				icon: <BsFillTelephoneFill style={styledIcons}/>
			},
			{
				label: "Nairobi Kenya",
				icon: <MdLocationOn style={styledIcons}/>
			},
		]
	},
}