import { mode } from "@chakra-ui/theme-tools";
import { underlineLink } from "./util/underlineLink";

export const Link = {
	baseStyle: {
		textDecoration: "none !important",
	},
	variants: {
		icon: (props) => ({
			p: "3",
			color: mode("app.light.dawn.100", "app.dark.dawn.100")(props),
			"&:hover": {
				color: mode("app.light.accent.solid", "app.dark.accent.solid")(props),
			},
		}),
		nav: (props) => ({
			...underlineLink(props),
			p: 2,
			fontSize: "md",
			fontFamily: "mono",
			color: mode("app.light.dawn.100", "app.dark.dawn.100")(props),
			"&:hover": {
				color: mode("app.light.white", "app.dark.white")(props),
			},
		}),
		external: (props) => underlineLink(props),
	},
};