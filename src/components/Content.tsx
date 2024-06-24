import ContentHeader from "./ContentHeader";
import ContentWrapper from "./ContentWrapper";

const Content = () => {
  return (
    <div className="grid gap-2 bg-gray-950 relative">
      <ContentHeader />
      <div className="grid gap-3 mb-10 px-10 bg-gray-950 w-full">
        <h2 className="text-white font-medium text-2xl">Series for you</h2>
        <ContentWrapper />
      </div>
    </div>
  );
};

export default Content;
