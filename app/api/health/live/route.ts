import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  // TODO: do some db checking
  return NextResponse.json(200);
}
