"use server";

import { NextRequest, NextResponse } from "next/server";
import { auth } from "auth";
import {
  Configuration,
  CountryCode,
  PlaidApi,
  PlaidEnvironments,
  Products
} from "plaid";
import { NextAuthRequest } from "next-auth/lib";

export const POST = auth(async (req: NextAuthRequest) => {
  const config = new Configuration({
    basePath: PlaidEnvironments[process.env.PLAID_ENV as string],
    baseOptions: {
      headers: {
        "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
        "PLAID-SECRET": process.env.PLAID_SECRET,
        "Plaid-Version": "2020-09-14"
      }
    }
  });

  const client = new PlaidApi(config);

  const tokenResponse = await client.linkTokenCreate({
    user: {
      client_user_id: Buffer.from(req.auth!.user!.email!).toString("base64")
    },
    client_name: "Spent App",
    language: "en",
    products: [Products.Transactions],
    country_codes: [CountryCode.Us],
    redirect_uri: "http://localhost:3000/playground"
  });

  await new Promise(resolve => setTimeout(resolve, 5000));

  return NextResponse.json(tokenResponse.data);
});
