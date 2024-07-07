import { db } from "@/db";
import { notFound, useSearchParams } from "next/navigation";
import React from "react";
import DesignPreview from "./design-preview";

interface PageProps {
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
}

export default async function PreviewPage({ searchParams }: PageProps) {
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

	return <DesignPreview configuration={configuration} />;
}
