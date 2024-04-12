import { RenderingInfo } from "@/components/rendering-info"

export const getStaticProps = async (context) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const data = await res.json()
  return { props: { data } }
}

// export const getServerSideProps = async (context) => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//   const data = await res.json()
//   return { props: { data } }
// }

export default function Content({data}) {

  return (
    <div>
      <div>Static Data</div>
      <div>{data.body}</div>
      <div>
        <RenderingInfo />
      </div>
    </div>
  )
}