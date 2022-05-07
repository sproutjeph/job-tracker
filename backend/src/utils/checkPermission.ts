import { UnauthenticatedError } from "../errors";

function checkPermission(requestUser: any, resourceUserId: any) {
  if (requestUser.userId === resourceUserId.toString()) {
    return;
  }

  throw new UnauthenticatedError("Not Authorized to make this Change");
}

export default checkPermission;
