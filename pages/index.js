import Link from 'next/link'
function index() {
  return (
    <div>
      {[...Array(5)].map((e,i) => (
        <p key={i}>
        <Link href={i+1+''}>
          <a>
            Go to post {i+1}
          </a>
        </Link>
        </p>
      ))}
    </div>
  )
}

export default index
