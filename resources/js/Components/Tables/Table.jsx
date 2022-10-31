import { useState } from "react";
import { useToggle } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { useHorizontalScroll } from "@/narsil-react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import ModalWindow from "@/Shared/ModalWindow";
import Pagination from "@/Shared/Pagination";
import SearchField from "@/Shared/SearchField";

export default function Table({
	title,
	createLink,
	createLabel,
	collection,
	settings,
	filters,
}) {
	const table = useHorizontalScroll();

	const [id, setId] = useState(null);
	const [show, setShow] = useToggle(false);

	function openModal(id) {
		setId(id);
		setShow(true);
	}

    return (
		<>
			<div className="md:flex md:justify-between mb-4">
				<div className="md:flex md:items-end">
					<h1 className="text-2xl">
						{ title }
					</h1>

					<Link
						href={ createLink }
						className="text-green-500 hover:text-green-600 ml-4"
					>
						{ createLabel }
					</Link>
				</div>

				<SearchField filters={ filters } />
			</div>

			<div
				className="border-2 border-color rounded overflow-x-scroll"
				ref={ table }
			>
				<table className="min-w-full">
					<TableHead
						data={ collection.data }
					/>
					<TableBody
						data={ collection.data }
						settings={ settings }
						openModal={ openModal }
					/>
				</table>
			</div>

			<div>
				<Pagination data={ collection.meta ? collection.meta : collection } />
			</div>

			{ show && (
				<ModalWindow
					text="Are you sure you want to delete this contact?"
					action={ () => Inertia.delete(settings.link + id) }
					actionLabel="Delete"
					setShow={ setShow }
				/>
			)}
		</>
    );
}
