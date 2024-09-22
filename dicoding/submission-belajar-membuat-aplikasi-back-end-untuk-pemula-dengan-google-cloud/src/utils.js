export function fail(h, data, status = 400) {
  return h.response({ status: "fail", ...data }).code(status);
}
