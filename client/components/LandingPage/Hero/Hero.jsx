import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center w-1/2 gap-y-5">
      <h1>Ipsum dolor sit amet consectetur adipiscing elit</h1>
      <p className="text-md text-secondary">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
      </p>
      {/* TODO: Change to pass an arrow icon prop */}
      <Button text={'Try our Tool'} />
    </section>
  );
}
