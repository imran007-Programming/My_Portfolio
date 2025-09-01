import tailwindAnimation from "../../assets/vuetailwindoutline.json";
import sw from "../../assets/software engineer.json";
import wb from "../../assets/Web Development.json";

import typescriptImage from "../../assets/Typescript.svg.png";
import ShippingApp from "../../assets/Screenshot 2025-09-01 125414.png";
import tailwind from "../../assets/tailwindcss-1633184775.webp";
export type Blog = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
  content: string;
  lottie?: object;
};

export const blogs: Blog[] = [
  {
    id: "typescript",
    slug: "typescript",
    title: "Why TypeScript Matters (and How to Start Using It)",
    excerpt:
      "JavaScript is powerful but loose. TypeScript adds guardrails without slowing you down.",
    date: "2025-09-01",
    readTime: "7 min",
    tags: ["TypeScript", "JavaScript"],
    lottie:wb,
    image: typescriptImage,
    content: `
TypeScript is one of those tools that seems small at first but quietly changes the way you think about writing code. It’s a superset of JavaScript, which means it adds new features on top of the language you already know, without taking anything away. The main addition is static typing. At first glance that sounds like an academic detail, but in practice it shifts how you structure your programs and how confidently you work with them.

With plain JavaScript, everything is flexible to the point of fragility. A variable might hold a number, then later hold a string, and nothing stops you until something breaks at runtime. TypeScript steps in before that happens. You declare what shape your data should have, what arguments a function accepts, what it returns. If you veer off track, the compiler tells you immediately. That feedback loop saves time and forces you to think more clearly about your intent.

But TypeScript isn’t just about preventing bugs. It makes your code self-documenting. Imagine walking into a codebase you’ve never seen before. In JavaScript, you’d trace through files trying to guess what each function expects. In TypeScript, the types tell the story upfront. You can hover over a function in your editor and see everything you need to know. That kind of clarity adds up, especially on teams.

Another strength is tooling. Because TypeScript understands your code’s structure, editors can offer autocomplete, refactoring suggestions, and error checking that actually make sense. You don’t waste time remembering exact property names or worrying about a typo slipping through. It feels like the language itself has your back.

Some people worry TypeScript adds too much ceremony. That’s fair—there’s a learning curve, and sometimes writing types feels like extra work. But once you get the hang of it, the tradeoff pays off. The type system is flexible: you can be strict when it matters, or leave things loose when you’re prototyping. You don’t have to convert everything at once either; you can adopt it gradually, file by file.

Bottom line: TypeScript doesn’t change JavaScript’s soul. It just gives you stronger tools to express your ideas, catch mistakes early, and keep large projects manageable. For many developers, that shift feels less like a burden and more like finally having guardrails where you need them most.

Would you like me to make this blog lean toward beginners curious about TypeScript, or for more experienced developers weighing whether to adopt it?.
`.trim(),
  },
  {
    id: "parcel-app",
    slug: "parcel-app",
    title: "Shipping App: Lessons From Building My First Production Project",
    excerpt: "Auth, performance, and the refactors I’d do next time.",
    date: "2024-05-02",
    readTime: "7 min",
    tags: ["React"],
    image: ShippingApp,
    lottie: sw,
    content: `
### Building a Parcel Delivery App People Trust

Everyone wants the same thing when they ship something: speed, certainty, and a clear price. That’s the whole point of my parcel app. You book a pickup in seconds, get a live ETA that updates with traffic, and watch the courier move on the map. No chasing drivers. No mystery fees. Just a straight path from your door to theirs.

Here’s what matters. The app confirms the price before you commit. Couriers are verified and rated. At pickup and drop-off, you get time-stamped photo proof and a note if the recipient isn’t available. Sensitive deliveries can use a PIN handoff so the parcel lands in the right hands, not just the right lobby. If plans change, reschedule without starting over.

The experience is designed for real life. Saved addresses and one-tap reorders cut busywork. Smart routing batches nearby orders to reduce delays and carbon waste. Notifications are timely, not noisy: booking confirmation, out for pickup, in transit, approaching destination, delivered. You can choose push, SMS, or WhatsApp. If something goes wrong, in-app chat connects you to a human who can actually fix it.

Businesses get extra tools. A web dashboard handles bulk uploads, order templates, and roles for teammates. Webhooks and an API plug deliveries into your storefront so customers see status without refreshing email. Analytics highlight on-time rates, average handoff time, and problem hotspots by area and hour. That makes it easier to staff the right windows, price peak periods fairly, and keep promises you can meet.

Privacy and safety aren’t afterthoughts. Location sharing is scoped to an active job. Courier routes hide home addresses. Payment details live with the provider, not the app. If a delivery needs a signature, we capture it cleanly and store it with the rest of the record for easy audits and returns.

Bottom line: shipping shouldn’t feel like rolling the dice. This app brings clarity to every step—book, track, deliver, confirm—so sending a product to a customer or a gift to a friend feels simple, predictable, and human.
`.trim(),
  },
  {
    id: "tailwind-ux",
    slug: "tailwind-ux",
    title: "Clean UI With Tailwind (Without Fighting It)",
    excerpt: "Small rules that keep components readable and layouts flexible.",
    date: "2024-08-20",
    readTime: "5 min",
    tags: ["Tailwind", "UI"],
    lottie: tailwindAnimation,
    image: tailwind,
    content: `
ChatGPT said:

Tailwind CSS flips the usual way of styling websites on its head. Instead of writing custom CSS for every component, you build interfaces using small utility classes directly in your markup. At first glance it can look messy—HTML sprinkled with flex, items-center, bg-blue-500, p-4. But once you use it for real, the approach starts to make sense.

Here’s why. Traditional CSS often leads to bloated stylesheets full of one-off class names. You try to stay organized, but over time you end up with duplication, overrides, and “where is this even coming from?” moments. Tailwind cuts through that by giving you a vocabulary of single-purpose classes that map directly to design decisions. Need spacing? Use mt-6. Want text centered and bold? Use text-center font-bold. You don’t have to bounce between HTML and CSS files to see what’s happening—it’s right there.

Tailwind is also opinionated in the best way. Its default configuration gives you a design system out of the box: consistent spacing, color scales, typography, and responsive breakpoints. You can tweak them if you want, but even without customization, you get a solid foundation that keeps your UI consistent. That means you spend less time fiddling with arbitrary pixel values and more time building actual features.

Another strength is speed. Because the classes are so granular, you can prototype quickly. You don’t have to stop to invent a new class name or wonder if a style already exists. Just apply what you need. And when you do need to adjust or refactor, changes happen in a single place—the markup itself—without hunting through separate files.

Critics sometimes say Tailwind clutters HTML or makes it harder to read. That’s a valid concern, especially when you’re new to the syntax. But with practice, those class strings become second nature. In fact, they can be more readable than a mysterious class name that requires you to open a CSS file just to understand what it does.

Bottom line: Tailwind isn’t just a CSS framework, it’s a new workflow. It trades traditional separation of structure and style for speed, clarity, and maintainability. If you value a consistent design system, fast iteration, and less CSS overhead, Tailwind earns its place in the toolkit.

Do you want me to expand this into a side-by-side contrast with something like Bootstrap, or keep it focused purely on Tailwind’s philosophy and workflow?
`.trim(),
  },
];
