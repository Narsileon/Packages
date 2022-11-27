import { transChoice } from "@/narsil-localization";
import AppHead from "@/Shared/AppHead";

export default function Index() {
    return (
        <>
        	<AppHead title={ transChoice('common.templates', 2) } />
        </>
    );
}
