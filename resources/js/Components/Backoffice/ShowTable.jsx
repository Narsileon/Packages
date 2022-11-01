import { trans } from "@/narsil-localization";
import { upperFirst } from "lodash";
import BackButton from "@/Components/Elements/Buttons/BackButton";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";

export default function ShowTable({
    title,
    href,
    data,
    children
}) {
    return (
        <section className="w-6/12 m-auto">
            <div className="primary-background border-2 border-color mt-4 p-8 space-y-4 rounded-xl">
                <h1 className="flex text-xl justify-center font-bold">
                    { title }
                </h1>

                <section id="display-data" className="space-y-4">
                    { children }

                    <hr className="border border-color"/>
                    <div>
                        <div className="space-x-1">
                            <span>
                                { upperFirst(t('validation.attributes.created_at')) + t(':') }
                            </span>
                            <span>
                                { data.created_at }
                            </span>
                        </div>
                        <div className="space-x-1">
                            <span>
                                { upperFirst(t('validation.attributes.updated_at')) + t(':') }
                            </span>
                            <span>
                                { data.updated_at }
                            </span>
                        </div>
                    </div>
                </section>

                <div className="flex items-center justify-between">
                    <BackButton className="primary-button" />
                    <PrimaryButton
                        href={ href }
                        label={ trans('Edit') }
                        as="link"
                    />
                </div>
            </div>
        </section>
    );
}