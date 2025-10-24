"use client";
import Button from "@/components/atoms/Button";
import { imageUrl} from "@/resources/utils/helper";
import {
  FiAlertCircle,
  FiAlertTriangle,
  FiCheckCircle,
  FiFileText,
  FiInfo,
} from "react-icons/fi";
import { useRouter } from "next/navigation";
import ModalSkeleton from "@/components/molecules/Modal/ModalSkeleton/ModalSkeleton";
import classes from "./AreYouSureModal.module.css";
import clsx from "clsx";

const AreYouSureModal = ({
  show,
  setShow,
  title = "Are You Sure?",
  subTitle = "This action cannot be undone. Please confirm to proceed.",
  onClick,
  icon,
  showCloseIcon,
  isLoading,
  type = "warning", // warning, danger, info, success
}) => {
  const router = useRouter();
  // Icon mapping based on type
  const getIcon = () => {
    if (icon) return icon;

    switch (type) {
      case "danger":
        return (
          <div className={classes.dangerIcon}>
            <FiAlertCircle size={32} />
          </div>
        );
      case "warning":
        return (
          <div className={classes.warningIcon}>
            <FiAlertTriangle size={32} />
          </div>
        );
      case "info":
        return (
          <div className={classes.infoIcon}>
            <FiInfo size={32} />
          </div>
        );
      case "success":
        return (
          <div className={classes.successIcon}>
            <FiCheckCircle size={32} />
          </div>
        );
      default:
        return (
          <div className={classes.defaultIcon}>
            <FiAlertTriangle size={32} />
          </div>
        );
    }
  };

  return (
    <ModalSkeleton
      variant="secondary"
      setShow={setShow}
      show={show}
      size="lg"
      showCloseIcon={showCloseIcon}
      header=""
      modalStyles={clsx(
        showCloseIcon && classes.modalClass,
        classes.modal
      )}
      icon={null}
      headerTitle={classes.headerTitle}
      modalClass={classes.modalBody}
    >
      <div className={classes.modalContent}>
        {/* Icon Section */}
        <div className={classes.iconSection}>{getIcon()}</div>

        {/* Title Section */}
        <div className={classes.titleSection}>
          <h2
            className={clsx("fs20 fw-700", classes.title)}
            style={{ color: "var(--modal-text-primary)" }}
          >
            {title}
          </h2>
          <p
            className={clsx("fs14 fw-400", classes.subtitle)}
            style={{ color: "var(--modal-text-secondary)" }}
          >
            {subTitle}
          </p>
        </div>

        {/* Action Buttons */}
        <div className={classes.actionSection}>
          <Button
            disabled={isLoading}
            variant="secondary-outline"
            label="Cancel"
            onClick={() => setShow(false)}
            className={classes.button}
          />
          <Button
            disabled={isLoading}
            variant="primary"
            label={isLoading ? "Please wait..." : "Confirm"}
            onClick={onClick}
            className={classes.button}
          />
        </div>
      </div>
    </ModalSkeleton>
  );
};

export default AreYouSureModal;
