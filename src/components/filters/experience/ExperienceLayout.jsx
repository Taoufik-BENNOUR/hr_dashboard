import React from 'react'
import ExperienceFilter from './ExperienceFilter'
import Experience2Filter from './Experience2Filter'
import Experience3Filter from './Experience3Filter'
import { useState } from 'react'

const ExperienceLayout = () => {
  const [isDragged, setIsDragged] = useState(false)
  return (
    <>
    <ExperienceFilter title={"Last/current experience"}  isDragged={isDragged} setIsDragged={setIsDragged} />
    <Experience2Filter title={"Experience -2"} isDragged={isDragged} setIsDragged={setIsDragged} />
    <Experience3Filter title={"Experience -3"} isDragged={isDragged} setIsDragged={setIsDragged} />
    </>
  )
}

export default ExperienceLayout