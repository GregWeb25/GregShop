import { Button } from "react-bootstrap";
import { deleteAdmin } from "../../../http/userAPI";
import { IAdminItemProps } from "./TypesAdminPanel";

const AdminsItem = ({admin, updateState}: IAdminItemProps) => {
    return(
        <div key={admin.id} className="mb-1 d-flex justify-content-between align-items-center">
            <h6>{admin.email}</h6>
            <Button
                variant="danger"
                onClick={async() => {
                    await deleteAdmin(admin.id).then(() =>updateState(''));
            }}
            > Удалить </Button>
        </div>
    )
}

export default AdminsItem;