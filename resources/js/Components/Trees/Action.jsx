import { forwardRef } from 'react';

export const Action = forwardRef(({
  ...props
}, ref) => {
    return (
		<button
			ref={ ref }
			{ ...props }
			tabIndex={ 0 }
		/>
	);
});
