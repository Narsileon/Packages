import Text from "@/Components/Elements/Text";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Show({ user }) {
    return (
        <div className="w-6/12 m-auto">
            <Head title="User" />

			<div className="primary-background bordered mt-4 p-8 space-y-4 rounded-xl">
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
    );
}
