export default function HoverArabic(props: { children: any, description: string }) {
  return <div className="group flex relative">
    <span className="group-hover:opacity-100 translate-y-7 transition-opacity bg-gray-800 p-4 text-md text-gray-100 rounded-md absolute opacity-0 w-80">{props.description}</span>
    <span className="text-blue-300 font-semibold">{props.children}</span>
  </div>
}