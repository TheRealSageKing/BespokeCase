"use client";
import React, { ReactNode } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

function PageProgressProvider({ children }: { children: ReactNode }) {
	return (
		<>
			{children}
			<ProgressBar
				height="4px"
				color="#16A349"
				options={{ showSpinner: true }}
				shallowRouting
			/>
		</>
	);
}

export default PageProgressProvider;
