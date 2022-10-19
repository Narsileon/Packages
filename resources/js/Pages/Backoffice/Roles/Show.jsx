import { Head, Link } from "@inertiajs/inertia-react";
import { t } from "@/localization";
import Text from "@/Components/Elements/Text";

export default function Show({ role }) {
    return (
        <>
			<Head title={ t("Role") } />

            <div className="w-6/12 m-auto">
                <div className="primary-background bordered mt-4 p-8 space-y-4 rounded-xl">
                    <h1 className="flex text-xl justify-center font-bold">
                        Role
                    </h1>

                    <Text 
                        label="Name"
                        value={ role.data.name }
                    />

                    <Link 
                        href={ `/backoffice/roles/${ role.data.id }/edit` }
                        className="primary-button"
                        as="button" 
                    >
                        Edit
                    </Link>
                </div>
            </div>
        </>
    );
}
