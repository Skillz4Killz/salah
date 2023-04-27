export const components: Record<string, React.FC<{ children: React.ReactNode }>> = {
  h1: (props) => <h1 className="text-6xl font-semibold my-3 border-b-2 border-gray-400">{props.children}</h1>,
  h2: (props) => <h2 className="text-4xl my-2">{props.children}</h2>,
  h3: (props) => <h2 className="text-4xl my-2">{props.children}</h2>,
  h4: (props) => <h2 className="text-3xl mt-2 mb-2">{props.children}</h2>,
  p: (props) => <p className="indent-3 my-4">{props.children}</p>,
}