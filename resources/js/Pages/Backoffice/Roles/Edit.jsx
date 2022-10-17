import { Head, useForm } from "@inertiajs/inertia-react";
import { Form, FormButton, FormInput } from "@/Components/Forms";

export default function Edit({ role }) {
    const { data, setData, patch, processing, errors } = useForm({
        name: role.data.name,
    });

	const onChange = (event) => {
        setData(event.target.id, event.target.value);
    };

	const submit = (e) => {
        e.preventDefault();

        patch('/backoffice/roles/' + role.data.id);
    };

    return (
        <>
            <Head title="Edit role" />

			<Form 
				title="Edit role"
				onSubmit={ submit }
			>
				<FormInput 
					id="name"
					label="Name"  
					value={ data.name } 
					error={ errors.name } 
					onChange={ onChange } 
				/>

				<FormButton 
					label="Update" 
					processing={ processing } 
				/>
            </Form>
        </>
    );
}
