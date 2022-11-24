import { useRef } from "react";
import { useClickAway, useToggle } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useTable } from "@/narsil-table";
import { upperFirst } from "lodash";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import Table from "@/Components/Tables/Table";
import TableHeader from "@/Components/Tables/TableHeader";

export default function Index({ customLocalization, columns, template }) {
	let newHeader = [...columns].map(object => {
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

	const [table] = useTable(customLocalization.dictionary, newHeader, template, false);

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
			<Head title={ transChoice('common.dictionaries', 1) } />

			<div className="flex flex-col h-full space-y-4">
				<TableHeader
					title={ upperFirst(transChoice('common.dictionaries', 1)) }
					table={ table }
				>
					<PrimaryButton
						label={ trans('common.update') }
						onClick={ update }
					/>
				</TableHeader>

				<Table table={ table } />
			</div>
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
