'use client';

export const POST = async (url: string, data?: any) => {
  const res = await fetch(url, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    credentials: "same-origin",
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    console.error("Error in POST", { url, data, res });
    throw Error(res.statusText);
  }

  return res.json();
};
