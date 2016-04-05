export function showSuccessNotification(message) {
  return {
    type: "SHOW_NOTIFICATION",
    notification_type: "SUCCESS",
    message
  }
}

export function showErrorNotification(message) {
  return {
    type: "SHOW_NOTIFICATION",
    notification_type: "ERROR",
    message
  }
}

export function hideNotification() {
  return {
    type: "CLEAR_NOTIFICATION"
  }
}