import { Head, useForm } from "@inertiajs/inertia-react";
import { t } from "@/localization";
import { Form, FormInput, FormHeader, FormFooter } from "@/Components/Forms";

export default function Create() {
	const { data, setData, post, processing, errors } = useForm({
        username: '',
        email: '',
		password: '',
		last_name: '',
		first_name: '',
    });

	const submit = (e) => {
        e.preventDefault();

        post('/backoffice/users');
    };

	return (
		<>
			<Head title={ t("Create user") } />

			<Form 
				header={ 
					<FormHeader title={ t("Create user") } /> 
				}
				footer={ 
					<FormFooter 
						href={ route("backoffice.users.index") }
						label="Create"
						processing={ processing }
					/>
				}
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
					id="password" 
					label="Password" 
					type="password" 
					value={ data.password} 
					error={ errors.password} 
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
			</Form>
		</>
	);
}
