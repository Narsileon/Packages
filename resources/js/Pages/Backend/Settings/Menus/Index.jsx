import { transChoice } from "@/narsil-localization";
import AppHead from "@/Shared/AppHead";
import SortableTree from "./SortableTree";

export default function Index({ menuItems }) {
    const items = {
        root1: {
            index: 'root1',
            canMove: true,
            isFolder: true,
            children: ['child1', 'child2'],
            data: 'root1',
        },
            child1: {
            index: 'child1',
            canMove: true,
            children: [],
            data: 'Child item 1',
        },
            child2: {
            index: 'child2',
            canMove: true,
            isFolder: true,
            children: ['child3'],
            data: 'Child item 2',
        },
            child3: {
            index: 'child3',
            canMove: true,
            children: [],
            data: 'Child item 3',
        },
            root2: {
            index: 'root2',
            canMove: true,
            isFolder: true,
            children: ['child4', 'child5'],
            data: 'root2',
        },
            child4: {
            index: 'child4',
            canMove: true,
            children: [],
            data: 'Child item 4',
        },
            child5: {
            index: 'child5',
            canMove: true,
            isFolder: true,
            children: ['child6'],
            data: 'Child item 5',
        },
            child6: {
            index: 'child6',
            canMove: true,
            children: [],
            data: 'Child item 6',
        },
    };

    const Wrapper = ({children}) => (
        <div
          style={{
            maxWidth: 600,
            padding: 10,
            margin: '0 auto',
            marginTop: '10%',
          }}
        >
          {children}
        </div>
      );


    return (
        <>
        	<AppHead title={ transChoice('common.menus', 2) } />

            <Wrapper>
                <SortableTree collapsible indicator removable />
            </Wrapper>
        </>
    );
}
