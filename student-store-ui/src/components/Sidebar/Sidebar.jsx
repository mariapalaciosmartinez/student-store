import * as React from "react"
import "./Sidebar.css"

export default function Sidebar({label}) {
  return (
    <section className="sidebar">
      <p className="label">{label}</p>
    </section>
  )
}