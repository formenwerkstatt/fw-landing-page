import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;

  let str = id.replace(/-/g, " ");
  str = str.charAt(0).toUpperCase() + str.slice(1);

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " && str[i + 1] !== "u") {
      str = str.slice(0, i + 1) + str[i + 1].toUpperCase() + str.slice(i + 2);
    }
  }

  return {
    title: `${str} | Formen Werkstatt`,
    description: str,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
