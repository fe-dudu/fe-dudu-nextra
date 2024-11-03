import React, { PropsWithChildren } from 'react'

export function IframeContainer({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        paddingTop: '56.25%',
      }}
    >
      {React.cloneElement(children, {
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        },
      })}
    </div>
  )
}
