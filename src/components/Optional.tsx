const Optional = () => {
	return (
		<div className="border-4 overflow-hidden border-main-blue rounded">
			<h2 className="text-lg font-bold  p-0.5 bg-main-blue">
				Дополнительно
			</h2>
			<div className="flex h-full flex-col p-2 pb-10  ">
				<label htmlFor="Comment">Примечание:</label>
				<textarea
					className="border border-main-blue h-full p-1 resize-none"
					id="Comment"
					name="Comment"
					placeholder="Примечание"
				/>
			</div>
		</div>
	);
};

export default Optional;
