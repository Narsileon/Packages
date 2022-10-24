import { useToggle } from "react-use";
import ModalWindow from "@/Shared/ModalWindow";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function Table({ data, columns, settings }) {
	const [id, setId] = useState(null);
	const [show, setShow] = useToggle(false);

	function openModal(id) {
		setId(id);
		setShow(true);
	}

    return (
		<div className="border-2 bordered rounded">
	        <table className="min-w-full">
				<TableHead 
					columns={ columns } 
				/>
				<TableBody 
					tableData={ data } 
					columns={ columns } 
					settings={ settings }
					openModal={ openModal } 
				/>
			</table>	

			{ show && ( 
				<ModalWindow 
					text="Are you sure you want to delete this contact?"
					action={ () => Inertia.delete(settings.link + id) }
					actionLabel="Delete"
					setShow={ setShow }
				/>
			)}
		</div>
    );
}