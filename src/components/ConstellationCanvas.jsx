import { useEffect, useRef } from 'react'

const NODE_COUNT = 80
const CONNECTION_DIST = 120
const DRIFT_SPEED = 0.15
const PULSE_SPEED = 0.0008

export default function ConstellationCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let width, height

    const nodes = []

    function resize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    function initNodes() {
      nodes.length = 0
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * DRIFT_SPEED,
          vy: (Math.random() - 0.5) * DRIFT_SPEED,
          radius: Math.random() * 1.5 + 0.5,
        })
      }
    }

    resize()
    initNodes()

    let time = 0

    function draw() {
      time++
      ctx.clearRect(0, 0, width, height)

      const pulseCenter = (Math.sin(time * PULSE_SPEED) * 0.5 + 0.5) * width

      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0) node.x = width
        if (node.x > width) node.x = 0
        if (node.y < 0) node.y = height
        if (node.y > height) node.y = 0
      }

      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.15
            const midX = (nodes[i].x + nodes[j].x) / 2
            const pulseDist = Math.abs(midX - pulseCenter)
            const pulseBoost = pulseDist < 200 ? (1 - pulseDist / 200) * 0.2 : 0

            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(100, 160, 255, ${alpha + pulseBoost})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // nodes
      for (const node of nodes) {
        const pulseDist = Math.abs(node.x - pulseCenter)
        const pulseBoost = pulseDist < 200 ? (1 - pulseDist / 200) * 0.4 : 0
        const alpha = 0.3 + pulseBoost

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(100, 160, 255, ${alpha})`
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      resize()
      initNodes()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  )
}
