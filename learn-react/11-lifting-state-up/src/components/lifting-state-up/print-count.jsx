import './print-count.css'

// Stateless
export default function PrintCount(props) {
  console.log('PrintCount 렌더링')
  console.log(props)

  return (
    <output className="print-count" style={{ padding: 12 }}>
      {props.count}
    </output>
  )
}
