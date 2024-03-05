import React from 'react'

export const Count = ({ completedCount, uncompletedCount }) => {
  return (
    <div className="p-5 font-bold text-[20px]">
      Completed: {completedCount}, Uncompleted: {uncompletedCount}
    </div>
  )
}
