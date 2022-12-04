import { trans } from "@/narsil-localization";
import { upperFirst } from "lodash";
import Icon from "@/Shared/Svg/Icon";

export default function TableSearch({
	setData,
	...props
}) {
	return (
		<div className="flex border-2 border-color rounded font-normal">
			<div className="primary-background flex items-center w-min-fit justify-between">
				<Icon
					name="search"
					className="m-2"
				/>
			</div>

			<input
				className="bg-transparent focus:outline-none p-2 w-full"
				placeholder={ `${ upperFirst(trans('common.search')) }...` }
				onChange={ (event) => setData(event.target.value) }
				autoComplete="off"
				{ ...props }
			/>
		</div>
	)
}
