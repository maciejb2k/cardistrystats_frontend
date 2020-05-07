import Swal from "sweetalert2";

const successButtonColor = "#77b05e";
const infoButtonColor = "#3fc3ee";
const warningButtonColor = "#fda355";
const errorButtonColor = "#f27474";
const questionButtonColor = "#87adbd";

export function alertSuccess(title, text) {
  return Swal.fire({
    title,
    text,
    type: "success",
    confirmButtonText: "Ok",
    confirmButtonColor: successButtonColor,
  });
}

export function alertInfo(title, text) {
  return Swal.fire({
    title,
    text,
    type: "info",
    confirmButtonText: "Ok",
    confirmButtonColor: infoButtonColor,
  });
}

export function alertWarning(title, text) {
  return Swal.fire({
    title,
    text,
    type: "warning",
    confirmButtonText: "Ok",
    confirmButtonColor: warningButtonColor,
  });
}

export function alertError(title, text) {
  return Swal.fire({
    title,
    text,
    type: "error",
    confirmButtonText: "Ok",
    confirmButtonColor: errorButtonColor,
  });
}

export function alertQuestion(title, text) {
  return Swal.fire({
    title,
    text,
    type: "question",
    confirmButtonText: "Ok",
    confirmButtonColor: questionButtonColor,
  });
}

export function confirmWarningDialog(title, text) {
  return Swal.fire({
    title,
    text,
    type: "warning",
    confirmButtonText: "Ok",
    confirmButtonColor: warningButtonColor,
    showCancelButton: true,
    cancelButtonColor: questionButtonColor,
  });
}

export function confirmErrorDialog(title, text) {
  return Swal.fire({
    title,
    text,
    type: "error",
    confirmButtonText: "Ok",
    confirmButtonColor: errorButtonColor,
    showCancelButton: true,
    cancelButtonColor: questionButtonColor,
  });
}
