import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push("/");
		}, 5000); //Takes us ti homepage after 5 secs
	}, []);

	return (
		<div className="not-found">
			<h1>Oooops........</h1>
			<h2>That page cannot be found :( </h2>
			<p>
				Going back to the{" "}
				<Link href="/">
					<a>Homepage</a>
				</Link>{" "}
				in 5 seconds.....
			</p>
		</div>
	);
};

export default NotFound;
