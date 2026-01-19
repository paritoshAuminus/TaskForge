import React, { useEffect } from 'react'
import { ReactFlow, Background, Controls, applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react'
import { useState, useCallback } from 'react';
import '@xyflow/react/dist/style.css';

function App() {

  
  const initialNodes = [
    {
      id: 'n1',
      position: { x: 0, y: 0 },
      data: { label: 'Node One' }
    },
    {
      id: 'n2',
      position: { x: 100, y: 100 },
      data: { label: 'Node Two', color: 'red' }
    }
  ]

  const initalEdges = [
    // {
    //   id: 'e1-2',
    //   source: 'n1',
    //   target: 'n2',
    //   label: 'Edge One',
    //   type: 'step'
    // }
  ]


  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initalEdges)

  const onNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  )

  const onEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  )

  const onConnect = useCallback(
    (change) => setEdges((edgeSnapshot) => addEdge(change, edgeSnapshot)),
    [],
  )

  const addNote = () => {
    const id = `n-${Date.now()}`

    setNodes((nodes) => [...nodes, {
      id, 
      // position: {x: Math.random() * 400, y: Math.random() * 400},
      position: {x: nodes[nodes.length - 1].position.x + 10, y: nodes[nodes.length - 1].position.y + 10},
      data: {label: `New Node`}
    }])
  }

  useEffect(() => {
    console.log(nodes, edges)
  }, [])
  
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(nodes, edges)
  } 

  return (
    <form onSubmit={submitHandler} className='w-full h-screen p-10'>
      <ReactFlow
        className='border border-black rounded-md'
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>

      <button onClick={addNote} type='button' className='p-10 rounded-md'>Add Node</button>
      <button className='p-10 rounded-md' type='submit'>Save</button>
    </form>
  )
}

export default App