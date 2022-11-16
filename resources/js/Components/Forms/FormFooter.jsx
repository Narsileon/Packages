export default function FormFooter({ children }) {
    return (
		<section id="form-footer">
			<div className="flex justify-between">
				{ children }
			</div>
		</section>
    );
}
