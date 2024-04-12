export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const data = await res.json()
  return { props: { data } }
}

// export const getServerSideProps = async (context) => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//   const data = await res.json()
//   return { props: { data } }
// }

export default function Content({data}: {data: {body: string}}) {

  return (
    <div>
      <div>Static Data</div>
      <div>{data.body}</div>
      <p suppressHydrationWarning>{Date.now()}</p>
    </div>
  )
}