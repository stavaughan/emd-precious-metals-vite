import React, { createContext } from 'react';
import { useScreenWidth, useFontSize } from 'src/hooks';

const SettingsContext = createContext({
    screen: {},
	fontSize: {}
});

export const SettingsContextProvider = (props) => {

	const { screen } = useScreenWidth();

	const fontSize = useFontSize({ isXSmall: screen.isXSmall });

    return (
        <SettingsContext.Provider
            value={{
				screen,
				fontSize
            }}
        >
            {props.children}
        </SettingsContext.Provider>
    );
};

export default SettingsContext;
