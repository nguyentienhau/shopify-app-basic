import React from "react";
import { NavMenu } from "@shopify/app-bridge-react";

export default function App() {
	return (
		<NavMenu>
			<a href="/" rel="home" />
			{/* <a href="/pagename">{t("NavigationMenu.pageName")}</a> */}
		</NavMenu>
	);
}
