import { forwardRef } from 'react';
import Icon from '@/Shared/Svg/Icon';

export const Handle = forwardRef((
	props,
	ref,
) => {
		return (
			<button
				className="cursor-grab"
				ref={ ref }
				{...props}
			>
				<Icon name="ellipsis-vertical" />
			</button>
		);
	}
);
