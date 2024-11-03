export function Circle({ color }: { color: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        width: 8,
        height: 8,
        border: '1px solid #fff',
        borderRadius: '50%',
        backgroundColor: color,
        marginRight: 5,
        verticalAlign: 'middle',
      }}
    />
  )
}
