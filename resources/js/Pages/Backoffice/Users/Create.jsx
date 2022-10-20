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
				submit={ () => post('/backoffice/users') }
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
					id="password" 
					label="password" 
					type="password" 
					value={ data.password} 
					error={ errors.password} 
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
