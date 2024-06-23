import { Link } from "react-router-dom"
const ContentHeader = () => {
  return (
    <div
        className="flex items-end content-image"
        style={{
          backgroundImage: "url('../tlou.jpg')",
          maxWidth: "100%",
          minHeight: "90vh",
          zIndex: 100,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="flex gap-4 mx-10 my-5" >
          <button className="text-center bg-white py-2 px-3 text-lg font-medium rounded-lg text-black" >Add to list</button>
          <Link to="#" className="text-center bg-white py-2  px-3 text-lg font-medium rounded-lg text-black" >More information</Link>
        </div>
      </div>
  )
}

export default ContentHeader