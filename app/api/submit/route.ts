import { NextResponse } from "next/server"

const URL = "https://script.google.com/macros/s/AKfycbz94B7a_NM6i_5qt9Dtu6Kyc7VyDo1vd_fgXlKeBXhiO5PYxBeSgC0cDshTT7WAodJC/exec"

export async function POST(req: Request) {
  const body = await req.text()
  const r = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body,
  })
  const data = await r.json()
  return NextResponse.json(data, { status: data.success ? 200 : 500 })
}
