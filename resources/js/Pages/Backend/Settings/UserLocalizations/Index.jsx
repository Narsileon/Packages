import { useRef } from "react";
import { useClickAway, useToggle } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { trans, transChoice } from "@/narsil-localization";
import { useTable } from "@/narsil-table";
import { upperFirst } from "lodash";
import { Table, TableContainer } from "@/Components/Tables";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import FrontendPagination from "@/Components/Pagination/FrontendPagination";
import AppHead from "@/Shared/AppHead";

export default function Index({ collection, tableSettings }) {
	let newHeader = [...tableSettings.columns].map(object => {
		if (object.id === 'custom_value') {
		  	return {
				...object,
				cell: props => (
					<CustomValue
						value={ props.getValue() }
						handleChange={ (event) => handleChange(event, props.row.original.key) }
					/>
				)
			}
		} else {
			return object;
		}
	});

	const [table] = useTable(collection.dictionary, newHeader, tableSettings, false);

	const handleChange = (event, key) => {
		let temp = [...table.options.data];

		temp.find((object, index) => {
			if (object.key === key) {
				object.custom_value = event.target.value;
				temp[index] = object;
				return true;
			}
		});

		table.options.meta.setData(temp);
	}

	function update() {
		Inertia.patch(`dictionary/${ customLocalization.user_id }`, { dictionary: table.options.data});
	};

	return (
		<>
			<AppHead title={ transChoice('common.dictionaries', 1) } />

			<TableContainer
				title={ upperFirst(transChoice('common.dictionaries', 1)) }
				table={ table }
				buttons={
					<PrimaryButton
						label={ trans('common.update') }
						onClick={ update }
					/>
				}
			>
				<Table table={ table } />

				<FrontendPagination table={ table } />
			</TableContainer>
		</>
	);
}

const CustomValue = ({ value, handleChange }) => {
	const [show, setShow] = useToggle(false);

	const field = useRef();

	useClickAway(field, () => setShow(false), ['mousedown', 'submit'])

	return (
		<div
			className="h-full w-full"
			onClick={ setShow }
			ref={ field }
		>
			{
				show ? (
					<textarea
						className="field h-8 w-full p-0 m-0"
						value={ value }
						onChange={ (event) => handleChange(event) }
						autoFocus
					/>
				) : (
					<span>
						{ value ? value : "..." }
					</span>
				)
			}
		</div>
	);
}
