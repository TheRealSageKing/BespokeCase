import MaxWidthWrapper from "@/components/custom/max-width-wrapper";
import Steps from "@/components/custom/steps";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<MaxWidthWrapper className="flex-1 flex-col flex ">
			<Steps />
			{children}
		</MaxWidthWrapper>
	);
}
