import { Head, useForm } from "@inertiajs/inertia-react";
import { t } from "@/localization";
import { Form, FormInput, FormHeader, FormFooter } from "@/Components/Forms";

export default function Edit({ user }) {
    const { data, setData, patch, processing, errors } = useForm({
        username: user.data.username,
        email: user.data.email,
        last_name: user.data.last_name,
        first_name: user.data.first_name
    });

    return (
        <>
			<Head title={ t("Edit user") } />

			<Form 
				header={ 
					<FormHeader title={ t("Edit user") } /> 
				}
				footer={ 
					<FormFooter 
						href={ route("backoffice.users.index") }
						label="Update"
						processing={ processing }
					/>
				}
				submit={ () => patch('/backoffice/users/' + user.data.id) }
			>
				<FormInput 
					id="username"
					label="username"  
					value={ data.username } 
					error={ errors.username } 
					setData={ setData } 
				/>
				<FormInput 
					id="email" 
					label="email" 
					type="email"
					value={ data.email} 
					error={ errors.email} 
					setData={ setData } 
				/>
				<FormInput 
					id="last_name" 
					label="last_name" 
					value={ data.last_name } 
					error={ errors.last_name } 
					setData={ setData } 
				/>
				<FormInput 
					id="first_name" 
					label="first_name" 
					value={ data.first_name } 
					error={ errors.first_name } 
					setData={ setData } 
				/>
            </Form>
        </>
    );
}
