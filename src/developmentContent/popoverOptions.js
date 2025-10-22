import { FiEye } from "react-icons/fi";

export const dashboardPopoverOptions = [
  {
    label: "View Details",
    value: "view",
    icon: <FiEye />
  },
  {
    label: "Edit",
    value: "edit", 
    icon: "✏️"
  },
  {
    label: "Delete",
    value: "delete",
    icon: "🗑️"
  },
  {
    label: "Approve",
    value: "approve",
    icon: "✅"
  },
  {
    label: "Reject",
    value: "reject",
    icon: "❌"
  }
];

export const appointmentPopoverOptions = [
  {
    label: "View Details",
    value: "view",
    icon: <FiEye />
  }
]

export const userRegistrationPopoverOptions = [
  {
    label: "View Details",  
    value: "view",
    icon: <FiEye />
  }
];




// Category popover options - dynamic based on status
export const getCategoryPopoverOptions = (status) => {
  const baseOptions = [
  
  ];

  const statusOption = {
    label: status === "Active" ? "In-Active" : "Active",
    value: status === "Active" ? "inactive" : "active",
  };

  return [...baseOptions, statusOption];
};

