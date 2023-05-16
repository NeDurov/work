import { TableRow, TableCell, Collapse } from "@mui/material";

const CollapseForInfosystem = ({ open }: { open: boolean }) => {
	return (
		<TableRow>
			<TableCell colSpan={15} padding="none">
				<Collapse
					in={open}
					timeout="auto"
					unmountOnExit
					style={{ height: "400px" }}
				>
					<div className=" flex flex-row w-full h-96 gap-4 overflow-hidden p-2">
						<div className="border-main-blue border-2 w-1/2 overflow-hidden ">
							<h3 className="text-base font-bold p-0.5 bg-main-blue">
								Формула расчета
							</h3>

							<div className="flex h-2/5 flex-col p-2 ">
								<label htmlFor="Formula">Формула:</label>
								<textarea
									className="border border-main-blue h-full p-1 resize-none"
									id="Formula"
									name="Formula"
								/>
							</div>

							<div className="flex h-1/2 flex-col p-2">
								<label htmlFor="CommentToFormula">
									Комментарий к формуле расчета:
								</label>
								<textarea
									className="border border-main-blue h-full p-1 resize-none"
									id="CommentToFormula"
									name="CommentToFormula"
								/>
							</div>
						</div>

						<div className="border-main-blue border-2 h-5/6 w-1/2">
							<h3 className="text-base font-bold p-0.5 bg-main-blue">
								Комментарий к инфосистеме
							</h3>
							<div className="flex h-full flex-col p-2 pb-10  ">
								<textarea className="border border-main-blue  h-full p-1 resize-none" />
							</div>
						</div>
					</div>
				</Collapse>
			</TableCell>
		</TableRow>
	);
};

export default CollapseForInfosystem;
