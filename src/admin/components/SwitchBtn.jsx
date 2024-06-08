import React, { useState } from "react";
import Switch from "react-switch";

const SwitchBtn = (props) => {

	const [checked, setChecked] = useState(props.checked);

	const handleChange = async () => {
		setChecked(!checked);

		let result = await fetch(
			props.url,
			{
				method: 'PUT',
				body: JSON.stringify({ isActive: !checked }),
				headers: { 'Content-Type': 'application/json' },
			}
		)
	}

	return (
		<Switch onChange={handleChange} checked={checked} />
	)
}

export default SwitchBtn
