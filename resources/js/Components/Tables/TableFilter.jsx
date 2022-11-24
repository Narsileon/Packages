import { trans } from "@/narsil-localization";
import { upperFirst } from "lodash";
import Icon from "@/Shared/Svg/Icon";

export default function TableSearch({
	onChange,
	debounce = 500,
	...props
}) {
	return (
		<div className="flex border-2 border-color rounded font-normal">
			<div className="primary-background flex items-center w-min-fit justify-between">
				<Icon
					name="search"
					className="w-6 h-6 m-2"
				/>
			</div>

			<input
				type="text"
				placeholder={ `${ upperFirst(trans('common.search')) }...` }
				autoComplete="off"
				onChange={ e => onChange(e.target.value) }
				className="bg-transparent focus:outline-none p-2 w-full"
				{ ...props }
			/>
		</div>
	)
}
