import Link from "next/link";

export default function Page() {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-950 text-white">
      <div>
        <h1 className="text-left text-2xl font-bold">
          <span className="text-blue-500">CPRG 306 :</span> Web Development 2 - Assignments
        </h1>
        <ul className="mt-4 space-y-2 text-l font-semibold">
          <li>
            <Link href="week-2" className="hover:text-blue-500 transition-colors">Week 2 - Assignment</Link>
          </li>
          <li>
            <Link href="week-3" className="hover:text-blue-500 transition-colors">Week 3 - Assignment</Link>
          </li>
          <li>
            <Link href="week-4" className="hover:text-blue-500 transition-colors">Week 4 - Assignment</Link>
          </li>
          <li>
            <Link href="week-5" className="hover:text-blue-500 transition-colors">Week 5 - Assignment</Link>
          </li>
          <li>
            <Link href="week-6" className="hover:text-blue-500 transition-colors">Week 6 - Assignment</Link>
          </li>
          <li>
            <Link href="week-7" className="hover:text-blue-500 transition-colors">Week 7 - Assignment</Link>
          </li>
          <li>
            <Link href="week-8" className="hover:text-blue-500 transition-colors">Week 8 - Assignment</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
