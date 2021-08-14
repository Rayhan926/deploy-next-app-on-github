import { useRouter } from "next/dist/client/router";
import Link from "next/link";

function dynamicPage() {
  const router = useRouter();
  const id = router.query.id;
  const prefix = "/deploy-next-app-on-github";
  return (
    <div>
      <Link href="/">
        <a>Go Home</a>
      </Link>
      <p>Post No Is {id}</p>
      <div>
        <img src={`${prefix + "/" + id}.png`} alt="Img" />
      </div>
    </div>
  );
}

export default dynamicPage;
