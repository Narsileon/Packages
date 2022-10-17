import TableBody from "./TableBody";
import TableHead from "./TableHead";

export default function Table({ data, columns, settings }) {
    return (
		<div className="bordered rounded">
	        <table className="min-w-full">
				<TableHead 
					columns={ columns } 
				/>
				<TableBody 
					tableData={ data } 
					columns={ columns } 
					settings={ settings } 
				/>
			</table>		
		</div>
    );
}