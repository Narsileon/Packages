import { useRef, useState } from "react";
import { useClickAway, useToggle } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { trans, transChoice } from "@/narsil-localization";
import { useTable } from "@/narsil-table";
import { upperFirst } from "lodash";
import { Table, TableContainer } from "@/Components/Tables";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import FrontendPagination from "@/Components/Pagination/FrontendPagination";
import AppHead from "@/Shared/AppHead";

export default function Index({ collection, customLocalization, tableSettings }) {
	const columns = tableSettings.columns.map((column) => {
		if (column.id === 'value') {
			return {
				...column,
				cell: props => (
					<CustomValue
						value={ props.getValue() == '' ? trans(getFullPath(props.row)) : props.getValue() }
						handleChange={ (event) => handleChange(event, props.row) }
					/>
				)
			};
		};

		return column;
 	});

	const [localization, setLocalization] = useState(customLocalization.localization);

	function getFullPath(row) {
		return row.original.path == '' ? row.original.key : `${ row.original.path }.${ row.original.key }`
	}

	const [table] = useTable(collection, columns, tableSettings, false);

	const handleChange = (event, row) => {
		let data = [...table.options.data];

		data.find((object, index) => {
			if (object.path === row.original.path && object.key === row.original.key) {
				object.value = event.target.value;
				data[index] = object;
				return true;
			}
		});

		table.options.meta.setData(data);
	}

	function update() {
		Inertia.patch(`/${ customLocalization.usedictionaryr_id }`, { dictionary: table.options.data});
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
