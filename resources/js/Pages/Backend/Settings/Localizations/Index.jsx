import { useEffect, useRef, useState } from "react";
import { useClickAway, usePrevious, useToggle } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import { Table, TableContainer } from "@/Components/Tables";
import { useTable } from "@/Components/Tables/pia-table";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import FrontendPagination from "@/Components/Pagination/FrontendPagination";
import AppHead from "@/Shared/AppHead";

export default function Index({ collection, tableSettings }) {
	const columns = tableSettings.columns.map((column) => {
		if (column.id === 'value') {
			return {
				...column,
				cell: props => (
					<CustomValue
						value={ props.getValue() }
						handleChange={ (value) => handleChange(value, props.row) }
					/>
				)
			};
		};

		return column;
 	});

	const [table] = useTable(collection.localization, columns, tableSettings, false);

	const handleChange = (value, row) => {
		const data = table.options.data.map((object) => {
			if (object.path === row.original.path && object.key === row.original.key) {
				return { ...object, value: value };
			}

			return object;
		})

		table.options.meta.setData(data);
	}

	function update() {
		Inertia.patch(route('admin.localizations.update', collection.id), {
			code: collection.code,
			localization: table.options.data,
		}, {
			preserveState: true,
		});
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
	const [customValue, setCustomValue] = useState(value);
	const [show, setShow] = useToggle(false);

	const field = useRef();

	useClickAway(field, () => setShow(false), ['mousedown', 'submit']);

	const previousShow = usePrevious(show);

	useEffect(() => {
		if (previousShow && show == false) {
			handleChange(customValue);
		}
	}, [show]);

	return (
		<div
			className="h-full w-full"
			onClick={ () => setShow(true) }
			ref={ field }
		>
			{
				show ? (
					<textarea
						className="field h-8 w-full p-0 m-0"
						value={ customValue }
						onChange={ (event) => setCustomValue(event.target.value) }
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
