import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { TreeItem } from './TreeItem';

const animateLayoutChanges = ({ isSorting, wasDragging }) =>
  	isSorting || wasDragging ? false : true;

export function SortableTreeItem({
	id,
	depth,
	...props
}) {
	const {
		attributes,
		isDragging,
		isSorting,
		listeners,
		setDraggableNodeRef,
		setDroppableNodeRef,
		transform,
		transition,
	} = useSortable({
		id,
		animateLayoutChanges,
	});

	const style = {
		transform: CSS.Translate.toString(transform),
		transition,
	};

  	return (
		<TreeItem
			ref={ setDraggableNodeRef }
			wrapperRef={ setDroppableNodeRef }
			style={ style }
			depth={ depth }
			ghost={ isDragging }
			disableInteraction={ isSorting }
			handleProps={{
				...attributes,
				...listeners,
			}}
			{...props}
		/>
	);
}
