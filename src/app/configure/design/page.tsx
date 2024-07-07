import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";
import DesignConfigurator from "./design-configurator";

interface PageProps {
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
}

export default async function DesignPage({ searchParams }: PageProps) {
	const { id } = searchParams;

	if (!id || typeof id !== "string") {
		return notFound();
	}

	const configuration = await db.configuration.findUnique({
		where: {
			id,
		},
	});

	if (!configuration) {
		return notFound();
	}

	const { url, width, height } = configuration;

	return (
		<DesignConfigurator
			configId={configuration.id}
			imageUrl={url}
			imageDimensions={{ width, height }}
		/>
	);
}
