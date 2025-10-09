export const dashboardPopoverOptions = [
  {
    label: "View Details",
    value: "view",
    icon: "👁️"
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
    icon: "👁️"
  }
]

export const userRegistrationPopoverOptions = [
  {
    label: "Upcoming",
    value: "upcoming",
  },
  {
    label: "Completed",
    value: "completed",
  },
  {
    label: "Rejected",
    value: "rejected",
  },
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

