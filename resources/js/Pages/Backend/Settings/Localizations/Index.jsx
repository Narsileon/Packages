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

export default function Index({ defaultLocalization, customLocalization, tableSettings }) {
	const columns = tableSettings.columns.map((column) => {
		if (column.id === 'value') {
			return {
				...column,
				cell: props => (
					<CustomValue
						value={ getValue(props) }
						handleChange={ (event) => handleChange(event, props.row) }
					/>
				)
			};
		};

		return column;
 	});

	function getValue(props) {
		let object = customLocalization.localization.find(x => x.path === props.row.original.path && x.key === props.row.original.key);

		return object ? object.value : props.getValue();
	}

	const [table] = useTable(defaultLocalization, columns, tableSettings, false);

	const handleChange = (event, row) => {
		const data = table.options.data.map((object) => {
			if (object.path === row.original.path && object.key === row.original.key) {
				let newObject = { ...object, value: event.target.value };

				let customObject = customLocalization.localization.find(x => x.path === row.original.path && x.key === row.original.key)

				if (customObject) {
					customLocalization.localization.find(x => x.path === row.original.path && x.key === row.original.key).value = event.target.value;
				} else {
					customLocalization.localization = [...customLocalization.localization, newObject]
				}

				return newObject;
			}

			return object;
		})

		table.options.meta.setData(data);

	}

	function update() {
		Inertia.patch(route('admin.localizations.update', customLocalization.id), customLocalization, {
			preserveState: false
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
	const [show, setShow] = useToggle(false);

	const field = useRef();

	useClickAway(field, () => setShow(false), ['mousedown', 'submit']);

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
