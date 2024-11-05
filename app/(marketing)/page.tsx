import Link from "next/link";

const IndexPage = () => {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:pt-32 pb-8 md:pb-12">
        <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
          <Link href="/login">ログイン</Link>
          <h1>Post Writer</h1>
          <p>ブログを書くためのサービス</p>
        </div>
      </section>
    </>
  );
};

export default IndexPage;
