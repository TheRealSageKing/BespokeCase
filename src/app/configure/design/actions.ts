"use server";

import { db } from "@/db";
import { SaveConfigArgs } from "./design-configurator";

export async function saveConfig({
	color,
	finish,
	material,
	model,
	configId,
}: SaveConfigArgs) {
	await db.configuration.update({
		where: { id: configId },
		data: {
			color,
			finish,
			material,
			model,
		},
	});
}
