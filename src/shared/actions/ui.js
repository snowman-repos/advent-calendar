export function loadingChanged(isLoading) {
  return {
    type: "IS_LOADING",
    isLoading
  }
}

export function submittingChanged(isSubmitting) {
  return {
    type: "IS_SUBMITTING",
    isSubmitting
  }
}