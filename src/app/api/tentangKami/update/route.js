import { ubahTentangKami } from '@/service/data/tentangKami'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { idTentangKami, data } = await request.json()

    const response = await ubahTentangKami(idTentangKami, data)

    let json_response = {
      status: 'success',
      data: response,
    }
    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
