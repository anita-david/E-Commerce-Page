import { useState } from "react";
import avatar from "../../assets/images/image-avatar.png";
function Avatar() {
	const [selected, setSelected] = useState(false)
	return (
		<div>
			<img   onMouseEnter={() => setSelected(!selected)}
			onMouseLeave={() => setSelected(!selected)}
      className={`w-10 h-10 rounded-full cursor-pointer transition 
        ${selected ? "ring-2 ring-orange-200" : ""}`} src={avatar} alt="Cart icon" />
		</div>
	)
}

export default Avatar
