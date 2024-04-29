
import { Cards, SideBar, PaginationComponent, PieCharts, DialysisSessions } from "../../../sections/index"
import { adminSideBar } from "../../../data/data"
import { sessions } from "../../../data/data"

const Dashboard = () => {
	return (
		<div className=" bg-primaryColor">
			<SideBar sideBarData={adminSideBar} />
			<div className="md:mr-48">
				<Cards />
				<div className="flex flex-row-reverse justify-between mt-6">
					<div className="flex flex-col w-full lg2:w-2/3 xl:w-7/12  ">
						<PaginationComponent data={sessions} RenderComponent={DialysisSessions} itemsPerPage={6} />
					</div>
					<div className="hidden xl:block">
						<PieCharts />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard