import { connect } from 'react-redux'
import { setFilter } from "../reducers/filterReducer"

const Filter = ({setFilter}) => {
  return(
    <div>
      filter: <input 
        name="filter" 
        onChange={({target}) => setFilter(target.value)} 
        />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}
const mapDispatchToProps = {
    setFilter,
  }

export default connect(mapStateToProps, mapDispatchToProps)(Filter)