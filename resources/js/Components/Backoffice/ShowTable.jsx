import { t } from "@/narsil-localization";
import BackButton from "@/Components/Elements/Buttons/BackButton";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";

export default function ShowTable({
    title,
    href,
    children
}) {
    return (
        <section className="w-6/12 m-auto">
            <div className="primary-background border-2 border-color mt-4 p-8 space-y-4 rounded-xl">
                <h1 className="flex text-xl justify-center font-bold">
                    { title }
                </h1>

                { children }

                <div className="flex items-center justify-between">
                    <BackButton className="primary-button" />
                    <PrimaryButton
                        href={ href }
                        label={ t('Edit') }
                        as="link"
                    />
                </div>
            </div>
        </section>
    );
}