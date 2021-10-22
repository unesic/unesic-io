import { mode } from "@chakra-ui/theme-tools";

export const styles = {
	global: (props) => ({
		body: {
			bg: mode("app.light.dusk.300", "app.dark.dusk.300")(props),
			color: mode("app.light.dawn.300", "app.dark.dawn.300")(props),
			fontSize: "xl",
		},
		li: {
			fontSize: "md",
			fontFamily: "mono",
			color: mode("app.light.dawn.300", "app.dark.dawn.300")(props),
			"&::before": {
				bg: mode("app.light.dusk.200", "app.dark.dusk.200")(props),
				color: mode("app.light.accent.solid", "app.dark.accent.solid")(props),
				content: "'$'",
				display: "inline-block",
				mr: 2,
				px: 1,
				fontWeight: "bold",
			},
		},
	}),
};
