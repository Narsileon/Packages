import { useState } from "react";
import { useToggle } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import ModalWindow from "@/Shared/ModalWindow";
import Pagination from "@/Shared/Pagination";

export default function Table({ collection, columns, settings }) {
	const [id, setId] = useState(null);
	const [show, setShow] = useToggle(false);

	function openModal(id) {
		setId(id);
		setShow(true);
	}

    return (
		<>
			<div className="border-2 border-color rounded">
				<table className="min-w-full">
					<TableHead
						columns={ columns }
					/>
					<TableBody
						tableData={ collection.data }
						columns={ columns }
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
