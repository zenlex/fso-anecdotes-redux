import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../reducers/filterReducer"

const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state=>state.filter)
  const handleChange = ({target}) => {
    dispatch(setFilter(target.value))
  }

  return(
    <div>
      filter: <input name="filter" value={filter} onChange={handleChange} />
    </div>
  )
}

export default Filter