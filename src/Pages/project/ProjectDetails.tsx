import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import percel from "../../assets/percel.png";

export default function ProjectDetails() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-700 to-pink-500">
            Fast track Delivery — Project Details
          </h1>
          <p className="mt-3 text-sm md:text-base text-gray-600">
            A full-stack parcel delivery platform with role-based access for Admin, Sender, and Receiver.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={() =>
              window.open("https://percel-delievey-app.vercel.app/", "_blank")
            }
            className="cursor-pointer bg-gradient-to-r rounded-none from-purple-500 to-pink-400"
          >
            Live
          </Button>
          <Button
            onClick={() =>
              window.open(
                "https://github.com/imran007-Programming/PERCEL_DELIVERY_APP",
                "_blank"
              )
            }
            className="cursor-pointer bg-gradient-to-r rounded-none from-purple-600 to-green-500"
          >
            GitHub
          </Button>
          <Button
            onClick={() => window.history.back()}
            className="cursor-pointer bg-gradient-to-r rounded-none from-gray-700 to-gray-500"
          >
            Back
          </Button>
        </div>
      </div>

      {/* Hero / Screenshot */}
      <div className="w-full">
        <img
          src={percel}
          alt="Fast track Delivery preview"
          className="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-xl"
        />
      </div>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-purple-500">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          The app streamlines parcel delivery from request to confirmation. Senders create delivery requests,
          Admin oversees users and parcel flow, and Receivers track and confirm deliveries in real time.
          The stack uses React + TypeScript on the client and Node/Express with MongoDB on the server,
          with form handling and validation via React Hook Form and Zod.
        </p>
      </section>

      {/* Roles & Permissions */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-purple-500">Roles & permissions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-5 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Admin</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Manage users and their access</li>
              <li>Track parcels across statuses</li>
              <li>Oversee parcel distribution process</li>
            </ul>
          </div>

          <div className="border rounded-lg p-5 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Sender</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Create parcel delivery requests</li>
              <li>Manage and update own requests</li>
              <li>View current status and history</li>
            </ul>
          </div>

          <div className="border rounded-lg p-5 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Receiver</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Track parcel in real time</li>
              <li>Confirm delivery on arrival</li>
              <li>View delivery details</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-purple-500">Core features</h2>
        <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
          <li className="border rounded-lg p-4">Create and manage parcel requests (Sender)</li>
          <li className="border rounded-lg p-4">Role-based dashboards (Admin / Sender / Receiver)</li>
          <li className="border rounded-lg p-4">Parcel tracking with clear status updates</li>
          <li className="border rounded-lg p-4">Delivery confirmation by Receiver</li>
          <li className="border rounded-lg p-4">Admin oversight for users and parcels</li>
          <li className="border rounded-lg p-4">Form handling + schema validation</li>
        </ul>
      </section>
       {/* Credentials */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-purple-500">Test Credentials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-5 shadow-sm">
            <h3 className="font-semibold mb-2">Admin</h3>
            <p className="text-gray-700"><span className="font-medium">Email:</span> admin@gmail.com</p>
            <p className="text-gray-700"><span className="font-medium">Password:</span> 1234567A@</p>
          </div>
          <div className="border rounded-lg p-5 shadow-sm">
            <h3 className="font-semibold mb-2">Receiver</h3>
            <p className="text-gray-700"><span className="font-medium">Email:</span> hximranhasan@gmail.com</p>
            <p className="text-gray-700"><span className="font-medium">Password:</span> 1234567A@</p>
          </div>
          <div className="border rounded-lg p-5 shadow-sm">
            <h3 className="font-semibold mb-2">Sender</h3>
            <p className="text-gray-700"><span className="font-medium">Email:</span> test@gmail.com</p>
            <p className="text-gray-700"><span className="font-medium">Password:</span> 1234567A@</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-purple-500">How it works</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <li>Sender submits a delivery request with parcel and receiver info.</li>
          <li>System saves the request and marks it as <span className="font-medium">Created</span>.</li>
          <li>Status progresses through steps like <span className="font-medium">In Transit</span> → <span className="font-medium">Out for Delivery</span>.</li>
          <li>Receiver tracks status and confirms receipt on delivery.</li>
          <li>Admin can view, filter, and manage all parcels and users.</li>
        </ol>
      </section>

      {/* Tech Stack */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-purple-500">Tech stack</h2>
        <ul className="flex flex-wrap gap-3">
          <li>
            <Badge className="h-7 bg-gradient-to-r from-blue-500 to-teal-500 text-white">React</Badge>
          </li>
          <li>
            <Badge className="h-7 bg-gradient-to-r from-blue-500 to-teal-500 text-white">TypeScript</Badge>
          </li>
          <li>
            <Badge className="h-7 bg-gradient-to-r from-green-500 to-yellow-500 text-white">Node.js</Badge>
          </li>
          <li>
            <Badge className="h-7 bg-gradient-to-r from-pink-500 to-red-500 text-white">ShadCN</Badge>
          </li>
          <li>
            <Badge className="h-7 bg-gradient-to-r from-red-500 to-orange-500 text-white">MongoDB</Badge>
          </li>
          <li>
            <Badge className="h-7 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">Express.js</Badge>
          </li>
          <li>
            <Badge className="h-7 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">React Hook Form</Badge>
          </li>
          <li>
            <Badge className="h-7 bg-gradient-to-r from-purple-500 to-green-500 text-white">Zod validation</Badge>
          </li>
          <li>
            <Badge className="h-7 bg-gradient-to-r from-red-500 to-green-500 text-white">mongoose</Badge>
          </li>
        </ul>
      </section>

      {/* Quick Links */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-purple-500">Links</h2>
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() =>
              window.open("https://percel-delievey-app.vercel.app/", "_blank")
            }
            className="cursor-pointer bg-gradient-to-r rounded-none from-purple-500 to-pink-400"
          >
            Open Live App
          </Button>
          <Button
            onClick={() =>
              window.open(
                "https://github.com/imran007-Programming/PERCEL_DELIVERY_APP",
                "_blank"
              )
            }
            className="cursor-pointer bg-gradient-to-r rounded-none from-purple-600 to-green-500"
          >
            View Repository
          </Button>
        </div>
      </section>
    </div>
  );
}
