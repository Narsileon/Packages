import { useState } from "react";
import { useToggle } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { useHorizontalScroll } from "@/narsil-react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import ModalWindow from "@/Shared/ModalWindow";

export default function Table({
	data,
	settings,
}) {
	const table = useHorizontalScroll();

	const [id, setId] = useState(null);
	const [show, setShow] = useToggle(false);

	function openModal(id) {
		setId(id);
		setShow(true);
	}

    return (
		<section id="table">
			<div
				className={ `border-2 border-color rounded overflow-x-auto ${ data[0] ? "" : "hidden" }` }
				ref={ table }
			>
				<table>
					<TableHead
						data={ data }
					/>
					<TableBody
						data={ data }
						settings={ settings }
						openModal={ openModal }
					/>
				</table>
			</div>

			{ show && (
				<ModalWindow
					text="Are you sure you want to delete this contact?"
					action={ () => Inertia.delete(settings.link + id) }
					actionLabel="Delete"
					setShow={ setShow }
				/>
			)}

		</section>
    );
}
