import { trans } from "@/narsil-localization";
import AppHead from "@/Shared/AppHead";

export default function Index() {
    return (
        <>
            <AppHead title={ trans('common.dashboard') } />
        </>
    );
}
