
import UserDetailsView from "../../../../components/manager_center/users/UserDetails/UserDetailsView";
import { UserDetailsProvider } from "./UserDetailsState";
import { useParams } from 'react-router-dom';

export default function UserDetailsPage() {

  let { id } = useParams();


  return (
    <UserDetailsProvider userId={id}>
<>
      <div className="flex-grow mr-56 ml-8 h-full mt-20 bg-cardDetailsColor ">
        <UserDetailsView />
      </div>
    </>
    </UserDetailsProvider>
    
  );
}
