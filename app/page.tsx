import Button from "./_common/Button";

export default function Home() {
  return (
      <main>
      <section className="flex justify-center items-center w-screen h-screen">
        <div className="px-6">
          <h1 className="text-4xl lg:text-[2.6rem] md:font-extrabold lg:leading-[2.9rem] font-bold text-white leading-10">
            Hello, I&apos;m Alice, <br /> a{" "}
            <span className="text-purple-400"> software engineer </span> with{" "}
            <br /> the bug for{" "}
            <span className="text-teal-400">
              {" "}
              <br /> solving problems
            </span>
            .
          </h1>
          <p className=" text-white py-4">
          Bridging together tech, brand strategy, and design for user-centric perfection.
          </p>
  
          <div className="flex gap-4">
            <Button hrefValue="/projects" label="VIEW PROJECTS" />
            <Button hrefValue="/experience" variant="secondary" label="VIEW EXPERIENCE" />
          </div>
        </div>
      </section>
    </main>
  )
}
