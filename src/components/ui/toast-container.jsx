"use client";

import BasicToast from "@/components/ui/toast-buttons";

export default function ToastContainer({ toast, clearToast }) {
  if (!toast) return null;

  return (
    <BasicToast
      message={toast.message}
      type={toast.type}
      onClose={clearToast}
    />
  );
}
