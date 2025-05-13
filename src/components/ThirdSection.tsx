const ThirdSection = () => {
  return (
    <div className="min-h-screen w-full bg-[url('/s4-bg.jpg')] bg-cover bg-center">
      <div className="grid min-h-screen grid-cols-1 bg-gradient-to-b from-black/70 via-black/80 to-black/90 backdrop-blur-2xl md:grid-cols-2">
        <div className="flex flex-col items-start justify-center gap-10 px-2 md:pl-28">
          <h1 className="text-5xl font-bold text-white">
            Check out ways to <br className="hidden md:block" /> claim other
            Rewards!
          </h1>
          <div className="space-y-4">
            <p className="text-xl">
              Complete 25 Deals to claim a $1000 Reward or complete fewer{" "}
              <br className="hidden md:block" /> to claim a lesser value Reward.
              For example: to claim a $5
            </p>
            <p className="text-xl">
              Reward, complete one Deal from level ?1 and one Deal from{" "}
              <br className="hidden md:block" /> level 2 for a total of 2 Deals.
              See below for total # of Deals <br className="hidden md:block" />{" "}
              required to claim Rewards from each level.
            </p>
          </div>
          <button
            type="button"
            className="cursor-pointer rounded-full border-2 border-yellow-400 bg-transparent px-10 py-4 text-lg text-yellow-400"
          >
            Get a Quick Start
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ThirdSection;
