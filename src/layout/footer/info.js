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
				link: ""
			},
			{
				label: "Privacy Policy",
				link: ""
			},
			{
				label: "Terms of Service",
				link: ""
			},
			{
				label: "Press",
				link: ""
			},
			{
				label: "Legal",
				link: ""
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
				label: "+254 746 432 175",
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