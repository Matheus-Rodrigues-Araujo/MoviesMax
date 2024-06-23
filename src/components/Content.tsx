import ContentHeader from "./ContentHeader";
const Content = () => {
  return (
    <div className="grid gap-2 bg-gray-950">
      <ContentHeader />
      <div className="grid gap-3 mb-10 px-10 bg-gray-950 w-full" >
        <h2 className="text-white font-medium text-2xl" >Series for yor</h2>
        <div className="content flex gap-2 overflow-hidden" style={{scrollBehavior: 'smooth'}} >
          <div className="bg-blue-1 h-56 w-40 md:h-80 md:w-56" ></div>
          <div className="bg-blue-1 h-56 w-40 md:h-80 md:w-56" ></div>
          <div className="bg-blue-1 h-56 w-40 md:h-80 md:w-56" ></div>
          <div className="bg-blue-1 h-56 w-40 md:h-80 md:w-56" ></div>
          <div className="bg-blue-1 h-56 w-40 md:h-80 md:w-56" ></div>
          <div className="bg-blue-1 h-56 w-40 md:h-80 md:w-56" ></div>
          <div className="bg-blue-1 h-56 w-40 md:h-80 md:w-56" ></div>
          <div className="bg-blue-1 h-56 w-40 md:h-80 md:w-56" ></div>
          <div className="bg-blue-1 h-56 w-40 md:h-80 md:w-56" ></div>
        </div>
      </div>
    </div>
  );
};

export default Content;
