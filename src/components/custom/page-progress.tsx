"use client";
import React, { ReactNode } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

function PageProgressProvider({ children }: { children: ReactNode }) {
	return (
		<>
			{children}
			<ProgressBar
				height="4px"
				color="#fffd00"
				options={{ showSpinner: false }}
				shallowRouting
			/>
		</>
	);
}

export default PageProgressProvider;
