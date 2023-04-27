export default function SectionHeader(props: { children: any }) {
  return <div className="flex items-center justify-center my-8">
    <h2 className="text-4xl text-gray-200 text-center py-3 w-3/4 border-b-2 border-gray-600">{props.children}</h2>
  </div>
}