import { useContext } from 'react'
import { DataContext } from '../services/DataContext'

export function useDataContext() {
  return useContext(DataContext)
}
