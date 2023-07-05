import { FaUserTie, FaBriefcase } from "react-icons/fa";
import { MdAddBusiness } from "react-icons/md"

const styledIcon = {
	fontSize: "25px"
}

export const leftRightContainerList = {
	title: "",
	items: [
		{
			icon: <MdAddBusiness style={styledIcon}/>,
			title: "Startup",
			text: "Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Id faucibus nisl tincidunt eget nullam non nisi est senectus et netus et malesuada fames."
		},
		{
			icon: <FaUserTie style={styledIcon}/>,
			title: "Entrepreneurs",
			text: "Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Id faucibus nisl tincidunt eget nullam non nisi est senectus et netus et malesuada fames."
		},
		{
			icon: <FaBriefcase style={styledIcon}/>,
			title: "Managers",
			text: "ncidunt eget nullam non nisi est. Senectus et netus et malesuada fames ac. Placerat duis ultricies lacus sed rhoncus est pellentesque elit ."
		},
	]
}
