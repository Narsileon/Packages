import { FormCheckbox } from "@/Components/Forms";

export default function Create({ data, setData }) {
	return (
		<>
			{
				data.map((item) => {
					return (
						<FormCheckbox
							id={ item.name } 
							label={ item.name }
							type="checkbox"  
							checked={ data[item.name] } 
							error={ errors[data[item.name]] } 
							setData={ setData } 
							key={ item.name }
						/>								
					);
				})
			}
		</>
	);
}
