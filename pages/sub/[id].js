import { useRouter } from "next/router";

export default function Sub() {
  const router = useRouter();
  const id = Number(router.query.id);
  return (
    <>
      <h1>sub{id}</h1>
    </>
  );
}
