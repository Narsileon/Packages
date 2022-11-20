import { useEffect, useRef } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { useClickAway, usePrevious, useToggle } from "react-use";
import Table from "@/Components/Tables/Table";
import TableSearch from "@/Components/Tables/TableSearch";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import { useTable } from "@/narsil-table";
import { upperFirst } from "lodash";

export default function Index({ customLocalization, header, template }) {
	let newHeader = [...header].map(object => {
		if (object.id === 'custom_value') {
		  	return {
				...object,
				cell: props => (
					<CustomValue
						value={ props.getValue() }
						handleChange={ (event) => handleChange(event, props.row._valuesCache.key) }
					/>
				)
			}
		} else {
			return object;
		}
	});

	const [table, data, setData, globalFilter, setGlobalFilter, newTemplate, sorting] = useTable(customLocalization.dictionary, newHeader, template);

	const previous = usePrevious(sorting);

	const handleChange = (event, key) => {
		let temp = [...data];

		temp.find((object, index) => {
			if (object.key === key) {
				object.custom_value = event.target.value;
				temp[index] = object;
				return true;
			}
		});

		setData(temp);
	}

    useEffect(() => {
		if (previous) {
			const timeout = setTimeout(() => {
				Inertia.get(route('admin.templates'), {
					'template': newTemplate,
					'route': 'admin.dictionary.index',
				});
			}, 0);

			return () => clearTimeout(timeout)
		}
	}, [sorting]);

	function update() {
		Inertia.patch(`dictionary/${ customLocalization.user_id }`, { dictionary: data});
	};

	return (
		<>
			<Head title={ transChoice('common.dictionaries', 1) } />

			<div className="flex flex-col h-full space-y-4">
				<section id="table-header">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-y-0 content-start place-content-between">
						<div className="col-span-1 self-center place-self-start">
							<span className="text-xl">
								{ upperFirst(transChoice('common.dictionaries', 1)) }
							</span>
						</div>
						<div className="col-span-1 md:order-2 self-center place-self-end">
							<PrimaryButton
								label={ trans('common.update') }
								onClick={ update }
							/>
						</div>

						<div className="col-span-1 sm:col-span-2 md:col-span-1 md:order-1 place-self-center w-full">
							<TableSearch
								value={ globalFilter ?? '' }
								onChange={ value => setGlobalFilter(value) }
							/>
						</div>
					</div>
				</section>

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
