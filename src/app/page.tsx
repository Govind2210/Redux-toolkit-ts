'use client'
import styles from './page.module.css'

import { RootState } from './lib/Store'
import {  useDispatch, useSelector } from 'react-redux'
import { increment , decrement , incrementByAmount } from './lib/Featue/counter/counterSlice'

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <main className={styles.main}>
      <h1>Redux Toolkit</h1>
      <button onClick={() => dispatch(increment())}>
        INCREASE
      </button>
      {count}
      <button onClick={() => dispatch(decrement())}>
        DECREASE
      </button>
      <button onClick={() => dispatch(incrementByAmount(2))}>
        INCREASE BY 2
      </button>

    </main>
  )
}
