import { Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

const flags = {
	ger: "https://cdn-icons-png.flaticon.com/512/197/197571.png",
	eng: "https://cdn-icons-png.flaticon.com/512/197/197374.png",
	esp: "https://cdn-icons-png.flaticon.com/512/197/197593.png",
};

const CardLanguages = ({ input }) => {
	return (
		<div>
			<Stack direction="row" spacing={20}>
				{input.languages.map((language, i) => {
					return (
						<Image
							key={language[i]}
							width={36}
							height={36}
							src={flags[language]}
							alt={language[i]}
						/>
					);
				})}
			</Stack>
		</div>
	);
};
export default CardLanguages;
