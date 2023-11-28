import { JSX, useMemo } from "react";
import "./App.css";

interface Tree {
  name: string;
  children?: Tree[];
}

const folder: Tree = {
  name: "Root",
  children: [
    {
      name: "Node 1",
      children: [
        {
          name: "Node 1.1",
          children: [
            {
              name: "Node 1.1.1",
              children: [
                {
                  name: "Node 1.1.1.1",
                },
                {
                  name: "Node 1.1.1.2",
                },
              ],
            },
            {
              name: "Node 1.1.2",
              children: [
                {
                  name: "Node 1.1.2.1",
                },
                {
                  name: "Node 1.1.2.2",
                },
              ],
            },
          ],
        },
        {
          name: "Node 1.2",
          children: [
            {
              name: "Node 1.2.1",
              children: [
                {
                  name: "Node 1.2.1.1",
                },
                {
                  name: "Node 1.2.1.2",
                },
              ],
            },
            {
              name: "Node 1.2.2",
              children: [
                {
                  name: "Node 1.2.2.1",
                },
                {
                  name: "Node 1.2.2.2",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Node 2",
      children: [
        {
          name: "Node 2.1",
          children: [
            {
              name: "Node 2.1.1",
              children: [
                {
                  name: "Node 2.1.1.1",
                },
                {
                  name: "Node 2.1.1.2",
                },
              ],
            },
            {
              name: "Node 2.1.2",
              children: [
                {
                  name: "Node 2.1.2.1",
                },
                {
                  name: "Node 2.1.2.2",
                },
              ],
            },
          ],
        },
        {
          name: "Node 2.2",
          children: [
            {
              name: "Node 2.2.1",
              children: [
                {
                  name: "Node 2.2.1.1",
                },
                {
                  name: "Node 2.2.1.2",
                },
              ],
            },
            {
              name: "Node 2.2.2",
              children: [
                {
                  name: "Node 2.2.2.1",
                },
                {
                  name: "Node 2.2.2.2",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "File 1",
    },
    {
      name: "File 2",
    },
  ],
};

type Props = {
  folder: Tree;
};

function TreeBrowser({ folder }: Props): JSX.Element {
  const components = useMemo(() => {
    function getComponents(tree: Tree) {
      if (Array.isArray(tree.children)) {
        return (
          <details key={tree.name}>
            <summary>📁 {tree.name}</summary>
            <div className="children">
              {tree.children.map((v) => getComponents(v))}
            </div>
          </details>
        );
      }

      return <p key={tree.name}>📄 {tree.name}</p>;
    }

    return getComponents(folder);
  }, [folder]);

  return components;
}

function App() {
  return (
    <div className="container">
      <TreeBrowser folder={folder} />
    </div>
  );
}

export default App;
