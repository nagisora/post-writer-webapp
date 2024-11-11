import Link from "next/link";

export default function MainNav() {
  return (
    <div className="flex items-center md:gap-10">
      <Link href={"/"} className="hidden md:flex items-center space-x-2">
        <span className="font-bold hidden md:inline-block">Post Writer</span>
      </Link>
      <nav className="md:flex gap-6 hidden">
        <Link
          href={"/blog"}
          className="text-lg sm:text-xl font-medium hover:text-foreground/80"
        >
          ブログ
        </Link>
        <Link
          href={"#features"}
          className="text-lg sm:text-xl font-medium hover:text-foreground/80"
        >
          機能
        </Link>
      </nav>
    </div>
  );
}
