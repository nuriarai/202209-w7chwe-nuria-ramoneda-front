import jwtDecode from "jwt-decode";
import { JwtPayloadCustom } from "../../src/types/types";

const decodeToken = (token: string) => {
  const jwtPayload: JwtPayloadCustom = jwtDecode(token);

  return {
    token: token,
    id: jwtPayload.id,
    username: jwtPayload.username,
  };
};

export default decodeToken;
