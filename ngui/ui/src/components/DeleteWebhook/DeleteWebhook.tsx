import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { FormattedMessage } from "react-intl";
import IconButton from "components/IconButton";
import { DeleteWebhookModal } from "components/SideModalManager/SideModals";
import { useOpenSideModal } from "hooks/useOpenSideModal";
import { useOrganizationInfo } from "hooks/useOrganizationInfo";

const DeleteWebhook = ({ id, action, url }) => {
  const openSideModal = useOpenSideModal();
  const { isDemo } = useOrganizationInfo();

  return (
    <IconButton
      color="error"
      icon={<DeleteOutlinedIcon />}
      onClick={() => openSideModal(DeleteWebhookModal, { id, action, url })}
      disabled={isDemo}
      tooltip={{
        show: true,
        value: <FormattedMessage id={isDemo ? "notAvailableInLiveDemo" : "delete"} />
      }}
    />
  );
};

export default DeleteWebhook;
