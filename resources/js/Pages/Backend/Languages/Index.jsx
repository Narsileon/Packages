import { useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { usePrevious } from "react-use";
import Table from "@/Components/Tables/Table";
import TableSearch from "@/Components/Tables/TableSearch";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import Toggle from "@/Components/Elements/Toggle";
import { useTable } from "@/narsil-table";

export default function Index({ languages, header, template }) {
	let newHeader = [...header].map(object => {
		if (object.id === 'active') {
		  	return {
				...object,
				cell: props => (
					<Toggle
						value={ props.getValue() }
						onChange={ (event) => handleChange(event, props.row._valuesCache.id) }
					/>
				)
			}
		} else {
			return object;
		}
	});

	const [table, data, setData, globalFilter, setGlobalFilter, newTemplate, sorting] = useTable(languages.data, newHeader, template);

	const previous = usePrevious(data);

    useEffect(() => {
		if (previous) {
			const timeout = setTimeout(() => {
				Inertia.get(route('admin.templates'), {
					'template': newTemplate,
					'route': 'admin.languages',
				});
			}, 0);

			return () => clearTimeout(timeout)
		}
	}, [data]);

	function handleChange(event, id) {
		let temp = [...data];

		let result = temp.find(x => x.id == id);
		result.active = !result.active;

		setData(temp);
	};

	function update() {
		Inertia.patch(route('admin.languages'), data);
	};

	return (
		<>
			<Head title={ transChoice('common.languages', 2) } />

			<div className="flex flex-col h-full space-y-4">
				<section id="table-header">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-y-0 content-start place-content-between">
						<div className="col-span-1 self-center place-self-start">
							<span className="text-xl">
								{ trans('List of :resource', { 'resource': transChoice('locales.languages', 2) }) }
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
