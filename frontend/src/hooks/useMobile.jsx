import React, { useContext } from "react";
import { SettingsContext } from "src/contexts";

const useMobile = () => {
	const { isXSmall } = useContext(SettingsContext).screen;
	return { isXSmall };
}

export default useMobile
