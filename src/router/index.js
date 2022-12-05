import { useAuth } from "../hooks/user/auth";
import AuthStack from "./authStack";
import UserStack from "./userStack";

export default function RouteNavigation() {
  const { user } = useAuth();

  return user ? <UserStack user={user} /> : <AuthStack />;
}
