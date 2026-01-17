"use client";

import { useState } from "react";

export function useToast() {
  const [toast, setToast] = useState(null);

  function showToast(message, type = "info") {
    setToast({ message, type, id: Date.now() });
  }

  function clearToast() {
    setToast(null);
  }

  return { toast, showToast, clearToast };
}
