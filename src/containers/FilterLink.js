import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

/** To co przekazujemy ze stany do propsów */
const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

/** Link Component: onClick zamelduj o tym, który Link został naciśnięty
 * i prześlij odpowiedni filter */
/** To o czym chcemy zakomunikowac state i dokonać ew. zmian*/
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink