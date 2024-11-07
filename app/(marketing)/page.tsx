import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const IndexPage = () => {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:pt-32 pb-8 md:pb-12">
        <div className="container flex flex-col items-center gap-4 max-w-[64rem] mx-auto text-center">
          <Link
            href={"/"}
            className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm"
          >
            Xをフォローする
          </Link>
          <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Post Writer
          </h1>
          <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
            ブログを書くためのAIサービス。あなたのアイデアを簡単に記事に変換し、執筆のプロセスを効率化します。
          </p>
          <div className="space-x-4">
            <Link
              href={"/login"}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              はじめる
            </Link>
            <Link
              href={"/"}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndexPage;
