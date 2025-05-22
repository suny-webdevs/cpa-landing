const PricingCards = () => {
  return (
    // main box
    <div className="grid w-[600px] grid-cols-3 gap-1 rounded-3xl bg-slate-900 px-5 py-7 md:gap-10 md:px-10 md:py-14">
      {/* box 1 */}
      <div className="flex flex-col">
        <h3 className="text-center text-xl font-semibold text-white">Level</h3>
        <div className="mt-20 flex flex-col gap-7 md:mt-10 md:gap-5">
          <p className="text-center text-3xl text-white">1</p>
          <p className="text-center text-3xl text-white">2</p>
          <p className="text-center text-3xl text-white">3</p>
          <p className="text-center text-3xl text-white">4</p>
          <p className="text-center text-3xl text-white">5</p>
          <p className="text-center text-3xl text-white">5</p>
          <p className="text-center text-3xl text-white">5</p>
        </div>
      </div>
      {/* box 2 */}
      <div className="flex transform flex-col rounded-lg border-2 border-yellow-400 bg-slate-900 px-5 py-6 md:scale-125">
        <h3 className="text-center text-xl font-semibold text-white">
          REWARD VALUE
        </h3>
        <div className="mt-4 flex flex-col gap-8 md:gap-2">
          <p className="text-center text-3xl text-white">--</p>
          <p className="text-center text-3xl text-white">$5</p>
          <p className="text-center text-3xl text-white">$100</p>
          <p className="text-center text-3xl text-white">$250</p>
          <p className="text-center text-3xl text-white">$500</p>
          <p className="text-center text-3xl text-white">$750</p>
          <p className="text-center text-3xl text-white">$1000</p>
        </div>
      </div>
      {/* box 3 */}
      <div className="flex flex-col">
        <h3 className="text-center font-semibold text-white">
          TOTAL DEALS REQUIRED TO CLAIM REWARD
        </h3>
        <div className="mt-6 flex flex-col gap-8 md:mt-1 md:gap-5">
          <p className="text-center text-3xl text-white">--</p>
          <p className="text-center text-3xl text-white">2</p>
          <p className="text-center text-3xl text-white">5</p>
          <p className="text-center text-3xl text-white">10</p>
          <p className="text-center text-3xl text-white">15</p>
          <p className="text-center text-3xl text-white">20</p>
          <p className="text-center text-3xl text-white">25</p>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
