import { Head, useForm } from "@inertiajs/inertia-react";
import { t } from "@/localization";
import { Form, FormInput, FormFooter } from "@/Components/Forms";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";

export default function Edit({ user }) {
    const { data, setData, patch, processing, errors } = useForm({
        username: user.data.username,
        email: user.data.email,
        last_name: user.data.last_name,
        first_name: user.data.first_name
    });

	const submit = (e) => {
        e.preventDefault();

        patch('/backoffice/users/' + user.data.id);
    };

    return (
        <>
			<Head title={ t("Create role") } />

			<Form 
				title="Edit user"
				onSubmit={ submit }
			>
				<FormInput 
					id="username"
					label="Username"  
					value={ data.username } 
					error={ errors.username } 
					setData={ setData } 
				/>
				<FormInput 
					id="email" 
					label="Email" 
					type="email"
					value={ data.email} 
					error={ errors.email} 
					setData={ setData } 
				/>
				<FormInput 
					id="last_name" 
					label="Last name" 
					value={ data.last_name } 
					error={ errors.last_name } 
					setData={ setData } 
				/>
				<FormInput 
					id="first_name" 
					label="First name" 
					value={ data.first_name } 
					error={ errors.first_name } 
					setData={ setData } 
				/>

				<FormFooter>
					<PrimaryButton 
						href={ route("backoffice.users.index") }
						type="link"
						label="Back"
					/>
					<PrimaryButton 
						label="Update"
						processing={ processing } 
					/>
				</FormFooter>
            </Form>
        </>
    );
}
