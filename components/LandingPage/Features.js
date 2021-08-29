import FeatureOne from "./Features/One";
import FeatureTwo from "./Features/Two";
import FeatureThree from "./Features/Three";

export default function Features() {
  return (
    <section className="bg-my-white py-20 mt-20 lg:mt-60">
      {/* Feature Heading */}
      <div className="sm:w-3/4 lg:w-8/12 mx-auto px-2">
        <h1 className="text-3xl text-center text-my-blue">Features</h1>
        <p className="text-my-grey text-center my-4">
          Our aim is to make it quick and easy for everyone to have access to
          premium digital books and to encourage a better reading culture among
          people.
        </p>
      </div>
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
    </section>
  );
}
