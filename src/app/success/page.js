'use client'

import { useRouter } from "next/navigation"

export default function Page() {

  const router = useRouter();
  console.log(router.values);

  return (
    <main>
      <h1>Sucess </h1>
    </main>
  )
}