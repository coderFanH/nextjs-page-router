import ExampleLayout from "@/components/example-layout"
import { useState } from "react"

export default function Example() {
  const [status, setStatus] = useState('123')

  return (
    <ExampleLayout>
      <div onClick={() => setStatus('456')}>Example Page</div>
      <div>{status}</div>
    </ExampleLayout>
  )
}