import { Head, Link } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import Text from "@/Components/Elements/Text";

export default function Show({ user }) {
    return (
        <>
			<Head title={ t("User") } />

            <div className="w-6/12 m-auto">
                <div className="primary-background border-2 border-color mt-4 p-8 space-y-4 rounded-xl">
                    <h1 className="flex text-xl justify-center font-bold">
                        User
                    </h1>

                    <Text 
                        label="Username"
                        value={ user.data.username }
                    />
                    <Text 
                        label="Email"
                        value={ user.data.email }
                    />
                    <Text 
                        label="Last name"
                        value={ user.data.last_name }
                    />
                    <Text 
                        label="First name"
                        value={ user.data.first_name }
                    />

                    <Link 
                        href={ `/backoffice/users/${ user.data.id }/edit` }
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
