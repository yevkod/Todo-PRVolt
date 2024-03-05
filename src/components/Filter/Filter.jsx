import React from 'react'
import { Button } from '../Button/Button'

export const Filter = ({setFilter}) => {
    return (
        <div className="flex gap-5 p-5 mx-auto bg-white rounded-lg h-24">
            <Button text="All" onClick={() => setFilter("all")} />
            <Button text="Completed" onClick={() => setFilter("completed")} />
            <Button text="Current" onClick={() => setFilter("current")} />
        </div>
    )
}
