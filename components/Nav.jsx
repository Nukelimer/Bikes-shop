import Link from "next/link";
import { usePathname } from "next/navigation";

const urls = [
  { name: "Home", path: "/" },
  { name: "Our Bikes", path: "our-bikes" },
];

function Nav({ containerStyle }) {
  const path = usePathname();
  return (
    <nav className={`${containerStyle}`}>
      {urls.map((url) => {
        return <Link key={ url.path} href={url.path} className={url.path === path ? 'text-accent' : undefined}>{url.name}</Link>;
      })}
    </nav>
  );
}

export default Nav;
