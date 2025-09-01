import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import percel from "../../assets/percel.png";

export default function Project1() {
  return (
    <div className="flex flex-col md:flex-row  md:justify-between space-y-8 md:space-y-0">
      {/* Left: Project Image */}
      <div className="flex justify-center w-full md:w-1/2">
        <img
          src={percel}
          alt="Project"
          className="w-[80%] md:w-[60%] h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right: Technologies Used */}
      <div className="w-full md:w-1/2">
        <h3 className="text-start sm:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-700 to-pink-500 my-4">
          Fast track Delivery
        </h3>

        <h3 className="text-start sm:text-2xl font-semibold text-purple-500 mb-4">
          Technologies Used --
        </h3>

        <ul className="flex flex-wrap gap-4 sm:grid sm:grid-cols-4 md:grid-cols-7">
          <li className="">
            <Badge className="w-18 h-7 bg-gradient-to-r from-blue-500 to-teal-500 text-white">
              React
            </Badge>
          </li>
          <li className="">
            <Badge className="w-18 h-7 bg-gradient-to-r from-blue-500 to-teal-500 text-white">
              TypeScript
            </Badge>
          </li>
          <li className="">
            <Badge className="w-18 h-7 bg-gradient-to-r from-green-500 to-yellow-500 text-white">
              Node.js
            </Badge>
          </li>
          <li className="">
            <Badge className="w-18 h-7 bg-gradient-to-r from-pink-500 to-red-500 text-white">
              ShadCN
            </Badge>
          </li>
          <li className="">
            <Badge className="w-18 h-7 bg-gradient-to-r from-red-500 to-orange-500 text-white">
              MongoDB
            </Badge>
          </li>
          <li className="">
            <Badge className="w-18 h-7 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
              Express.js
            </Badge>
          </li>
          <li className="">
            <Badge className="w-auto h-7 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
              React Hook Form
            </Badge>
          </li>
          <li className="">
            <Badge className="w-auto h-7 bg-gradient-to-r from-purple-500 to-green-500 text-white">
              Zod validation
            </Badge>
          </li>
          <li className="sm:pl-7">
            <Badge className="w-auto h-7 bg-gradient-to-r from-red-500 to-green-500 text-white">
              mongoose
            </Badge>
          </li>
        </ul>

      

        {/* Bullet points about the website */}
        <div className="mt-8">
          <h4 className="text-2xl text-start font-semibold text-purple-500 mb-4">
            About the Website
          </h4>
          <ul className="flex flex-wrap text-start sm:list-disc sm:pl-6 space-y-2">
            <li>
              This is a full-stack parcel delivery website with modern web
              technologies.
            </li>
            <li>
              It provides three distinct roles: Admin, Sender, and Receiver.
            </li>
            <li>
              Admin can manage users, track parcels, and handle the parcel
              distribution process.
            </li>
            <li>Senders can create and manage parcel delivery requests.</li>
            <li>
              Receivers can track their parcels in real-time and confirm
              deliveries.
            </li>
          </ul>
          <div className="flex gap-x-6 mt-5">
            <Button
              onClick={() =>
                window.open("https://percel-delievey-app.vercel.app/", "_blank")
              }
              className="cursor-pointer bg-gradient-to-r rounded-none from-purple-500 to-pink-400"
            >
              Live link
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://github.com/imran007-Programming/PERCEL_DELIVERY_APP",
                  "_blank"
                )
              }
              className="cursor-pointer bg-gradient-to-r rounded-none from-purple-600 to-green-00"
            >
              Github link
            </Button>
              {/* Details Button */}
        <div className="">
          <Button
            onClick={() => window.open("/project-details", "_self")}
            className="cursor-pointer bg-gradient-to-r rounded-none from-blue-500 to-green-400"
          >
            Details
          </Button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
