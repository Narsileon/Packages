import { useEffect, useState } from "react";
import { getCoreRowModel, getFilteredRowModel, getSortedRowModel, sortingFns, useReactTable } from "@tanstack/react-table";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { usePrevious } from "react-use";
import { rankItem, compareItems } from '@tanstack/match-sorter-utils'
import NewTable from "@/Components/Tables/NewTable";
import TableSearch from "@/Components/Tables/TableSearch";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";

export default function Index({ languages, header, template }) {
	const [sorting, setSorting] = useState(template.sorting)

	const defaultColumnSizing = {
		minSize: 100,
		maxSize: 300,
	}

	const [globalFilter, setGlobalFilter] = useState('');

	const [data, setData] = useState(languages.data);

	if (template.sizing) {
		header.forEach(object => {
			if (template.sizing[object.id]) {
				object.size = template.sizing[object.id];
			}
		});
	}

	const [columns] = useState(() => [...header]);
	const [columnOrder, setColumnOrder] = useState(template.order);

	const fuzzyFilter = (row, columnId, value, addMeta) => {
		const itemRank = rankItem(row.getValue(columnId), value)

		addMeta({ itemRank })

		return itemRank.passed
	}

	const fuzzySort = (rowA, rowB, columnId) => {
		let dir = 0

		if (rowA.columnFiltersMeta[columnId]) {
		  	dir = compareItems(!rowA.columnFiltersMeta[columnId].itemRank, !rowB.columnFiltersMeta[columnId].itemRank)
		}

		return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir
	}

	const table = useReactTable({
		data,
		columns,
		filterFns: {
			fuzzy: fuzzyFilter,
		},
		state: {
			columnOrder,
			globalFilter,
			sorting,
		},
		defaultColumn: defaultColumnSizing,
		columnResizeMode: 'onChange',
		onGlobalFilterChange: setGlobalFilter,
		globalFilterFn: fuzzyFilter,
		onColumnOrderChange: setColumnOrder,
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
	});

	const previous = usePrevious(sorting);

    useEffect(() => {
		if (previous) {
			const timeout = setTimeout(() => {
				Inertia.get(route('admin.templates'), {
					'language_template': {
						'order': columnOrder,
						'sorting': sorting,
						'globalSearch': globalFilter,
						'sizing': { ...template.sizing, ...table.getState().columnSizing },
					},
					'route': 'admin.languages',
					'template': 'language_template',
				});
			}, 0);

			return () => clearTimeout(timeout)
		}
	}, [sorting]);

	function handleChange(event, id) {
		let data = [...tableData];

		let result = data.find(x => x.id == id);
		result.active = !result.active;

		setTableData(data);
	};

	function update() {
		Inertia.patch(route('admin.languages'), tableData);
	};

	return (
		<>
			<Head title={ transChoice('common.languages', 2) } />

			<div className="space-y-4">
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

				<section id="table">
					<div className={ `table-fixed w-fit max-w-full border-2 border-color rounded overflow-x-auto` }>
						<NewTable table={ table } />
					</div>
				</section>
			</div>
		</>
	);
}
