export default function Hero() {
  return (
    <main className="flex-1 flex">
      <div className=" w-2/3 flex flex-col justify-center items-start p-16 gap-4 md:w-full md:items-center">
        <h2 className="text-6xl font-bold text-teal-500">Build your persistance</h2>
        <p>Tired of wandering in the unknown? We got you!</p>
        <button className="inline-block bg-teal-500 px-4 py-2 rounded-sm hover:bg-white hover:text-teal-500">
          Try Now
        </button>
      </div>
    </main>
  );
}
