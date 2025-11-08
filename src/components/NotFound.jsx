import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const { error } = useRouteError();
  return <center>{error?.message}</center>;
}
