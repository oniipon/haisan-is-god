import * as React from 'react'
import hisotries from './history'

const HistoryComponent = () => {
  return (
    <div>
      <h2>History</h2>
      <ul>
        {hisotries.map(h => <li key={h.episode}>{h.date}: {h.episode}</li>)}
      </ul>
    </div>
  )
}

export default HistoryComponent