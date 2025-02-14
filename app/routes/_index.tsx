import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<h1 className="font-display text-3xl font-bold text-black">IN DEV</h1>
		</div>
	);
}
