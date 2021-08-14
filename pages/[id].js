import Link from "next/link";

function dynamicPage({ id }) {
  console.log(id);
  // const id = "1";
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

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;

  return { props: { id } };
};
